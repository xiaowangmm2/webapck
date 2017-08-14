# webpack文档

标签（空格分隔）： webpack

---
### 一. npm --save-dev与--save区别
> --save-dev 是你开发时候依赖的东西，**开发时依赖**
--save 是你发布之后还依赖的东西。**运行时依赖**
比如:
你写 ES6 代码，如果你想编译成 ES5 发布,那么 babel 就是devDependencies。
如果你用了 jQuery，由于发布之后还是依赖jQuery，所以是dependencies。

### 二. webpack cli
[webpack-cli-api](https://doc.webpack-china.org/api/cli/)
1. 使用配置文件的用法
```
webpack [--config webpack.config.js]
webpack --config example.config.js
```
2. 不使用配置文件的用法
```
webpack <entry> [<entry>] <output>
webpack src/index.js dist/bundle.js
```
3. 其他常用配置
```
1. webpack --config example.config.js
指定其它的配置文件
2. webpack --env.production
传入 webpack 配置文件中使用的环境变量。
```
4. 输出相关配置
![cli输出](http://chuantu.biz/t5/165/1502246601x1944864576.png)
```
webpack
    index=./src/index.js index2=./src/index2.js                     --output-path='./dist'                                          --output-filename='[name][hash].bundle.js'
```
### 三. webpack核心概念值entry
[webpack之entry](https://doc.webpack-china.org/concepts/entry-points/)
1. 单个入口（简写）语法
```
//用法 entry: string|Array<string>
const config = {
  entry: './path/to/my/entry/file.js'
};

module.exports = config;
//等同于
const config = {
  entry: {
    main: './path/to/my/entry/file.js'
  }
};
```
2. 对象语法
```
//用法：entry: {[entryChunkName: string]: string|Array<string>}
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
```
### 四. webpack核心概念值output
[webpack之output](https://doc.webpack-china.org/concepts/output/)
1. 用法
```
{
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  }
}
1. filename 用于输出文件的文件名。
2. 目标输出目录 path 的绝对路径。
```
### 五. webpack核心概念之loader
1. [loader列表](https://doc.webpack-china.org/loaders/)
2. 使用 Loader的方式

`2.1 配置（推荐）`：在 webpack.config.js 文件中指定 loader。
```
 module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
```

`2.2 内联`：在每个 import 语句中显式指定 loader。
```
//可以在 import 语句或任何等效于 "import" 的方式中指定 loader。使用 ! 将资源中的loader分开。分开的每个部分都相对于当前目录解析。

//通过前置所有规则及使用 !，可以对应覆盖到配置中的任意 loader。选项可以传递查询参数，例如 ?key=value&foo=bar，或者一个 JSON 对象，例如 ?{"key":"value","foo":"bar"}。

import Styles from 'style-loader!css-loader?modules!./styles.css';
```
`2.3 CLI`：在 shell 命令中指定它们。
```
//这会对 .jade 文件使用 jade-loader，对 .css 文件使用 style-loader 和 css-loader。

webpack --module-bind jade-loader --module-bind 'css=style-loader!css-loader'
```

### 六. webpack核心概念之module
![webpack之模块](http://chuantu.biz/t5/165/1502259668x1944864576.png)
### 七. webpack之文件变化自动编译
webpack 中有几个不同的选项，可以帮助你在代码发生变化后自动编译代码：
- webpack's Watch Mode
- webpack-dev-server
- webpack-dev-middleware
















