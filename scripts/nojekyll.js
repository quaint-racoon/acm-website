const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(nojekyllPath, '');
console.log('.nojekyll created in', outDir);
