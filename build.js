// build.js — runs on Netlify every time Jess saves a piece in the CMS
// Reads all artwork markdown files and compiles them into data.json

const fs = require('fs');
const path = require('path');

const artworkDir = path.join(__dirname, '_artwork');
const outputFile = path.join(__dirname, 'data.json');

// If no artwork folder yet, write empty array
if (!fs.existsSync(artworkDir)) {
  fs.writeFileSync(outputFile, '[]');
  console.log('No artwork files found — wrote empty data.json');
  process.exit(0);
}

const files = fs.readdirSync(artworkDir).filter(f => f.endsWith('.md'));

const artworks = files.map((file, index) => {
  const content = fs.readFileSync(path.join(artworkDir, file), 'utf8');

  // Parse frontmatter between --- delimiters
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;

  const frontmatter = match[1];

  const get = (key) => {
    const line = frontmatter.split('\n').find(l => l.startsWith(key + ':'));
    if (!line) return '';
    return line.replace(key + ':', '').trim().replace(/^["']|["']$/g, '');
  };

  return {
    id: index + 1,
    title: get('title'),
    category: get('category'),
    description: get('description'),
    image: get('image') || ''
  };
}).filter(Boolean);

// Sort alphabetically by title
artworks.sort((a, b) => a.title.localeCompare(b.title));

fs.writeFileSync(outputFile, JSON.stringify(artworks, null, 2));
console.log(`✅ Built data.json with ${artworks.length} artwork piece(s)`);
