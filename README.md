# typescript-Basic

```
1- Install yarn

2- install --dev webpack webpack-cli webpack-dev-server

3- install --dev typescript tsloader
```
4- tsconfig
```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "dist",
    "sourceMap": true
  }
}
```
5- webpack.config.js
```
const path = require('path')
module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'app.js',
    path: __dirname + './dist',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader' }],
  },
  devServer: {
    port: 3000,
  },
};
```
index.html
```
<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>TypeScript Basics</title>
  </head>
  <body>
    <div class="app"></div>
    <script src="app.js"></script>
  </body>
</html>
```
6- yarn start
