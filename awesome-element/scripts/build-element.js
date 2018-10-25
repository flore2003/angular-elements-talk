const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/awesome-element/runtime.js',
        './dist/awesome-element/polyfills.js',
        './dist/awesome-element/scripts.js',
        './dist/awesome-element/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/awesome-element.js');
})();