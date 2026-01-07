const fs = require('fs');
const path = require('path');

// Source and destination directories
const sourceDir = path.join(__dirname, '..', '..', 'attached_assets');
const destDir = path.join(__dirname, '..', 'public', 'assets');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Copy function
function copyAssets(src, dst) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const dstPath = path.join(dst, entry.name);
    
    if (entry.isDirectory()) {
      if (!fs.existsSync(dstPath)) {
        fs.mkdirSync(dstPath, { recursive: true });
      }
      copyAssets(srcPath, dstPath);
    } else {
      // Only copy image files
      if (entry.name.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        fs.copyFileSync(srcPath, dstPath);
        console.log(`Copied: ${entry.name}`);
      }
    }
  }
}

// Check if source directory exists
if (fs.existsSync(sourceDir)) {
  console.log('Copying assets from:', sourceDir);
  console.log('To:', destDir);
  copyAssets(sourceDir, destDir);
  console.log('Assets copied successfully!');
} else {
  console.log('Source directory not found:', sourceDir);
  console.log('Creating placeholder assets directory...');
  
  // Create a simple placeholder structure
  const placeholderDirs = ['images', 'videos', 'posters'];
  for (const dir of placeholderDirs) {
    const dirPath = path.join(destDir, dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
  }
  
  console.log('Placeholder assets directory created.');
}