import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Copy widget files from dist/widget to public/widget
const sourceDir = path.join(__dirname, 'dist', 'widget');
const targetDir = path.join(__dirname, 'public', 'widget');

// Create target directory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Copy files
const files = ['chat-widget.js', 'chat-widget.css', 'chat-widget.umd.cjs'];

files.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const targetPath = path.join(targetDir, file);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✅ Copied ${file} to public/widget/`);
  } else {
    console.log(`❌ Source file not found: ${sourcePath}`);
  }
});

console.log('🎉 Widget files copied to public/widget/ for deployment!'); 