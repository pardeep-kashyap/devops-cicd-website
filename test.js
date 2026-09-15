// Minimal test suite run by the "Test" stage of the pipeline. Uses only Node built-ins.
const fs = require('fs');
const path = require('path');
const assert = require('assert');

const src = path.join(__dirname, 'src');
const html = fs.readFileSync(path.join(src, 'index.html'), 'utf8');

const tests = [
  ['index.html exists', () => assert.ok(fs.existsSync(path.join(src, 'index.html')))],
  ['style.css exists', () => assert.ok(fs.existsSync(path.join(src, 'style.css')))],
  ['script.js exists', () => assert.ok(fs.existsSync(path.join(src, 'script.js')))],
  ['has a <title>', () => assert.match(html, /<title>.+<\/title>/)],
  ['has a version line', () => assert.match(html, /Version:\s*\d+\.\d+/)],
  ['mentions GitHub Actions', () => assert.ok(html.includes('GitHub Actions'))],
  ['links style.css', () => assert.ok(html.includes('href="style.css"'))],
  ['links script.js', () => assert.ok(html.includes('src="script.js"'))],
];

let failed = 0;
for (const [name, fn] of tests) {
  try {
    fn();
    console.log('  PASS  ' + name);
  } catch (e) {
    failed++;
    console.log('  FAIL  ' + name + ' -> ' + e.message);
  }
}

console.log(`\n${tests.length - failed}/${tests.length} tests passed`);
process.exit(failed ? 1 : 0);
