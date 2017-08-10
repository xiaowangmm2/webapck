const path = require('path');
module.exports = {
    entry: {
    	repeat: path.join(__dirname, '../src/repeat.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    }
};
