const fs = require('fs');
const svgPath = './public/snw.svg';
let content = fs.readFileSync(svgPath, 'utf8');

// Remove all <path ... /> tags
content = content.replace(/<path[^>]*\/>/g, '');

fs.writeFileSync(svgPath, content, 'utf8');
console.log("Paths removed from SVG!");
