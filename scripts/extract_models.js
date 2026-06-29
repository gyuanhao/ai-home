// Extract models from main.js as JSON for Python processing
const fs = require('fs');
const path = require('path');

const mainJs = fs.readFileSync(path.join(__dirname, '..', 'js', 'main.js'), 'utf-8');

// Extract only the models array (from "const models = [" to the closing "];")
const start = mainJs.indexOf('const models = [');
const end = mainJs.indexOf('\n];', start) + 2;
const modelsCode = mainJs.substring(start, end).replace('const models = ', 'return ');

// Evaluate just the models array
const models = new Function(modelsCode)();

fs.writeFileSync(
    path.join(__dirname, 'models.json'),
    JSON.stringify(models, null, 2),
    'utf-8'
);

console.log(`Extracted ${models.length} models to models.json`);
