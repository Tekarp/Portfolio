const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'Images_and_Videos');
const destDir = path.join(process.cwd(), 'public');

if (!fs.existsSync(srcDir)) {
  console.warn('Images_and_Videos folder not found, skipping copy.');
  process.exit(0);
}

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

fs.readdirSync(srcDir).forEach((file) => {
  const src = path.join(srcDir, file);
  if (fs.statSync(src).isFile()) {
    fs.copyFileSync(src, path.join(destDir, file));
    console.log('Copied:', file);
  }
});
