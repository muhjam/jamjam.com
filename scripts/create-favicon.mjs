import { readFile, writeFile, mkdir, existsSync } from 'fs';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const publicDir = join(__dirname, '../public');
const svgPath = join(publicDir, 'globe.svg');

// Simple SVG to create a basic favicon
const createFaviconSVG = () => {
  return `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="#2563eb"/>
  <g transform="translate(8, 8)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#ffffff"/>
  </g>
</svg>`;
};

// Create the favicon SVG file
const faviconSVG = createFaviconSVG();
const faviconPath = join(publicDir, 'favicon.svg');

try {
  await fs.writeFile(faviconPath, faviconSVG);
  console.log('✓ Created favicon.svg');
} catch (error) {
  console.error('Error creating favicon.svg:', error.message);
}

// Create HTML file with favicon examples
const htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Favicon Test</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
</head>
<body>
  <h1>Favicon Test Page</h1>
  <p>Check the browser tab for the favicon!</p>
  <p>Open this page to test your favicon: <a href="/">Home</a></p>
</body>
</html>`;

try {
  await fs.writeFile(join(publicDir, 'favicon-test.html'), htmlContent);
  console.log('✓ Created favicon-test.html');
} catch (error) {
  console.error('Error creating favicon-test.html:', error.message);
}

console.log('\n📝 Next steps:');
console.log('1. Visit https://realfavicongenerator.net/');
console.log('2. Upload the favicon.svg file');
console.log('3. Download the generated favicon package');
console.log('4. Replace the files in your public/ directory');
console.log('5. Test by opening favicon-test.html in your browser');
console.log('\nOr use an online converter to create:');
console.log('- favicon.ico (16x16, 32x32)');
console.log('- favicon-16x16.png');
console.log('- favicon-32x32.png');
console.log('- apple-touch-icon.png (180x180)');
console.log('- android-chrome-192x192.png');
console.log('- android-chrome-512x512.png'); 