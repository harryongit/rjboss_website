const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const src = path.join(root, 'src', 'assets', 'logo.png');
const destDir = path.join(root, 'public');
const dest = path.join(destDir, 'logo.png');

if (!fs.existsSync(src)) {
  console.error('Source logo not found:', src);
  process.exit(2);
}

try {
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(src, dest);
  console.log('Copied logo to', dest);
} catch (err) {
  console.error('Failed to copy logo:', err);
  process.exit(1);
}
