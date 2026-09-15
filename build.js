// "Build / Package" stage: copies src/ to dist/ and stamps the build time into index.html.
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src');
const dist = path.join(__dirname, 'dist');

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

const buildTime = new Date().toISOString();
const commit = (process.env.GITHUB_SHA || 'local').slice(0, 7);

for (const file of fs.readdirSync(src)) {
  let content = fs.readFileSync(path.join(src, file), 'utf8');
  if (file === 'index.html') {
    content = content.replace('__BUILD_TIME__', `${buildTime} (commit ${commit})`);
  }
  fs.writeFileSync(path.join(dist, file), content);
  console.log('  built ' + file);
}

console.log('\nBuild complete -> dist/ (' + buildTime + ')');
