const path = require('path');
module.exports = {
    // entry: path.join(__dirname, '../src/single.js'),
    entry: {
    	single: path.join(__dirname, '../src/single.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    }
};
