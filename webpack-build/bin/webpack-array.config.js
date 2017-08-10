const path = require('path');
module.exports = {
    entry: {
    	array: [path.join(__dirname, '../src/array1.js'), path.join(__dirname, '../src/array2.js')]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    }
};
