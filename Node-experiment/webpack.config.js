const path = require('path');

module.exports = {
    mode: 'development',
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'undled.js",
        path: path.resolve(__dirname, "app"),
    },
}