const fs = require('fs');
const path = require('path');

// Source and destination directories
const sourceDir = path.join(__dirname, '..', '..', 'attached_assets');
const destDir = path.join(__dirname, '..', 'public', 'assets');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('Created destination directory:', destDir);
}

// Copy function with error handling
function copyAssets(src, dst) {
  try {
    const entries = fs.readdirSync(src, { withFileTypes: true });
    let copiedCount = 0;
    let skippedCount = 0;
    
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const dstPath = path.join(dst, entry.name);
      
      if (entry.isDirectory()) {
        // Skip directories for now, only copy files
        continue;
      } else {
        // Only copy image and media files
        if (entry.name.match(/\.(jpg|jpeg|png|gif|webp|svg|mp4|mov|avi)$/i)) {
          // Check if file already exists and is the same
          if (fs.existsSync(dstPath)) {
            const srcStat = fs.statSync(srcPath);
            const dstStat = fs.statSync(dstPath);
            
            if (srcStat.mtimeMs <= dstStat.mtimeMs && srcStat.size === dstStat.size) {
              skippedCount++;
              continue;
            }
          }
          
          fs.copyFileSync(srcPath, dstPath);
          copiedCount++;
        }
      }
    }
    
    console.log(`Assets copy completed: ${copiedCount} copied, ${skippedCount} skipped`);
    return { copied: copiedCount, skipped: skippedCount };
    
  } catch (error) {
    console.error('Error copying assets:', error.message);
    return { copied: 0, skipped: 0, error: error.message };
  }
}

// Check if source directory exists
if (fs.existsSync(sourceDir)) {
  console.log('Copying assets from:', sourceDir);
  console.log('To:', destDir);
  const result = copyAssets(sourceDir, destDir);
  
  if (result.copied === 0 && !result.error) {
    console.log('No new assets to copy. All assets are up to date.');
  }
} else {
  console.log('Source directory not found:', sourceDir);
  console.log('Creating placeholder logo...');
  
  // Create a simple placeholder logo
  const placeholderPath = path.join(destDir, 'jaxa-logo-placeholder.png');
  if (!fs.existsSync(placeholderPath)) {
    // Create a minimal SVG placeholder
    const svgContent = `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="100" fill="#0083C0"/>
      <text x="100" y="50" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">JAXA</text>
    </svg>`;
    
    fs.writeFileSync(placeholderPath, svgContent);
    console.log('Created placeholder logo');
  }
}