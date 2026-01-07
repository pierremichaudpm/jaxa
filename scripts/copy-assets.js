const fs = require('fs');
const path = require('path');

// Destination directory
const destDir = path.join(__dirname, '..', 'public', 'assets');

// Create destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log('Created destination directory:', destDir);
}

// Check if we already have assets in public/assets
const existingAssets = fs.readdirSync(destDir).filter(file => 
  file.match(/\.(jpg|jpeg|png|gif|webp|svg|mp4|mov|avi)$/i)
);

if (existingAssets.length > 0) {
  console.log(`Found ${existingAssets.length} existing assets in ${destDir}`);
  console.log('Skipping asset copy - assets already present');
  process.exit(0);
}

// If no assets exist, try to copy from source directory
const sourceDir = path.join(__dirname, '..', '..', 'attached_assets');

if (fs.existsSync(sourceDir)) {
  console.log('Copying assets from:', sourceDir);
  console.log('To:', destDir);
  
  try {
    const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
    let copiedCount = 0;
    
    for (const entry of entries) {
      const srcPath = path.join(sourceDir, entry.name);
      const dstPath = path.join(destDir, entry.name);
      
      if (!entry.isDirectory()) {
        // Only copy image and media files
        if (entry.name.match(/\.(jpg|jpeg|png|gif|webp|svg|mp4|mov|avi)$/i)) {
          fs.copyFileSync(srcPath, dstPath);
          copiedCount++;
          if (copiedCount <= 5) {
            console.log(`Copied: ${entry.name}`);
          }
        }
      }
    }
    
    if (copiedCount > 5) {
      console.log(`... and ${copiedCount - 5} more files`);
    }
    console.log(`Assets copy completed: ${copiedCount} files copied`);
    
  } catch (error) {
    console.error('Error copying assets:', error.message);
    createPlaceholderLogo();
  }
} else {
  console.log('Source directory not found:', sourceDir);
  console.log('This is expected on Netlify - assets should already be in public/assets/');
  createPlaceholderLogo();
}

function createPlaceholderLogo() {
  console.log('Creating placeholder logo...');
  
  // Create a simple placeholder logo
  const placeholderPath = path.join(destDir, 'jaxa-logo-placeholder.svg');
  const svgContent = `<svg width="200" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="100" fill="#0083C0"/>
    <text x="100" y="50" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">JAXA</text>
  </svg>`;
  
  fs.writeFileSync(placeholderPath, svgContent);
  console.log('Created placeholder logo');
}