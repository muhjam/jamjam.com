import { writeFile, mkdir, existsSync } from 'fs';
import { get as httpsGet } from 'https';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = [
  {
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    filename: 'project1.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop',
    filename: 'project2.jpg'
  },
  {
    url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop',
    filename: 'project3.jpg'
  }
];

// Create images directory if it doesn't exist
const imagesDir = join(__dirname, '../public/images');
if (!existsSync(imagesDir)) {
  await mkdir(imagesDir, { recursive: true });
}

// Download each image
for (const { url, filename } of images) {
  const filePath = join(imagesDir, filename);
  
  try {
    const response = await new Promise((resolve, reject) => {
      const req = httpsGet(url, (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          const chunks = [];
          res.on('data', chunk => chunks.push(chunk));
          res.on('end', () => resolve(Buffer.concat(chunks)));
        } else {
          reject(new Error(`Request failed with status code ${res.statusCode}`));
        }
      });
      req.on('error', reject);
    });
    
    await new Promise((resolve, reject) => {
      writeFile(filePath, response, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
    
    console.log(`Downloaded ${filename}`);
  } catch (error) {
    console.error(`Error downloading ${filename}:`, error.message);
  }
}

console.log('Image setup complete!');
