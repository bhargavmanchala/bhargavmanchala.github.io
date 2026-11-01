// Generates the favicon set in public/ from one monogram design.
// Run with: node scripts/generate-favicons.mjs
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const BLUE = '#000000'; // black tile with white letters

// "BM" drawn as strokes so it renders the same everywhere (no font needed).
const letters = `
  <g fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M11 18V46"/>
    <path d="M11 18h9a7 7 0 0 1 0 14H11"/>
    <path d="M20 32a7 7 0 0 1 0 14H11"/>
    <path d="M36 46V18l9 16 9-16v28"/>
  </g>`;

const svg = (radius) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="${radius}" fill="${BLUE}"/>${letters}</svg>\n`;

const out = (name) => path.join('public', name);

// Rounded version for browser tabs, square version for iOS (it rounds the corners itself).
fs.writeFileSync(out('favicon.svg'), svg(14));
const rounded = Buffer.from(svg(14));
const square = Buffer.from(svg(0));

const png = (buf, size) => sharp(buf, { density: 384 }).resize(size, size).png().toBuffer();

// favicon.ico with 16, 32 and 48 px PNG images inside.
const sizes = [16, 32, 48];
const images = await Promise.all(sizes.map((s) => png(rounded, s)));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
let offset = 6 + 16 * sizes.length;
const entries = images.map((img, i) => {
  const e = Buffer.alloc(16);
  e.writeUInt8(sizes[i], 0);
  e.writeUInt8(sizes[i], 1);
  e.writeUInt16LE(1, 4);
  e.writeUInt16LE(32, 6);
  e.writeUInt32LE(img.length, 8);
  e.writeUInt32LE(offset, 12);
  offset += img.length;
  return e;
});
fs.writeFileSync(out('favicon.ico'), Buffer.concat([header, ...entries, ...images]));

fs.writeFileSync(out('apple-touch-icon.png'), await png(square, 180));
fs.writeFileSync(out('icon-192.png'), await png(rounded, 192));
fs.writeFileSync(out('icon-512.png'), await png(rounded, 512));

fs.writeFileSync(
  out('site.webmanifest'),
  JSON.stringify(
    {
      name: 'Bhargav Manchala',
      short_name: 'Bhargav',
      icons: [
        { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
        { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      ],
      theme_color: BLUE,
      background_color: '#ffffff',
      display: 'browser',
    },
    null,
    2,
  ) + '\n',
);

console.log('Favicon set written to public/');
