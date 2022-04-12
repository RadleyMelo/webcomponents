const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/component1/runtime.js',
    './dist/component1/polyfills.js',
    './dist/component1/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'dist/component1/component1-element.js');
})();