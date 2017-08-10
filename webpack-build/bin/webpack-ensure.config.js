const path = require('path');
module.exports = {
    entry: {
    	ensure: path.join(__dirname, '../src/ensure.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    }
};
