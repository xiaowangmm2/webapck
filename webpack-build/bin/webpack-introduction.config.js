const path = require('path');
module.exports = {
    entry: {
    	introduction: path.join(__dirname, '../src/introduction.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    }
};
