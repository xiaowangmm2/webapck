const path = require('path');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {
    	"common1": path.join(__dirname, '../src/common1.js'),
    	"common2": path.join(__dirname, '../src/common2.js')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js'
    },
    plugins: [
        new CommonsChunkPlugin({
        	name: "common"
        })
    ]
};
