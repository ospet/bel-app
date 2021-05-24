const fs = require('fs');
const appVersion = require('../package.json').version;
console.log(appVersion);
fs.writeFileSync('build/version.json', `{"version": "${appVersion}"}`);
