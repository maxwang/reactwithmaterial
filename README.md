start react from empty

1. npm init -y
2. npm i webpack --save-dev
3. npm i webpack-cli --save-dev
4. add webpack command line inside package.json
"scripts": {
  "build": "webpack --mode production"
}

5. setup react webpack and Babel
npm i babel-loader babel-core babel-preset-env babel-preset-react --save-dev

6. configure Babel!. Create a new file named .babelrc
content
{
    "presets": ["env", "react"]
}

7. config webpack.configure.js

8. install react, react-dom
npm i react react-dom --save-dev

9. install html-webpack-plugin
npm i html-webpack-plugin html-loader --save-dev

10. install webpack dev server
npm i webpack-dev-server --save-dev


//additional
11. install material-ui
npm install @material-ui/core
npm install typeface-roboto --save
npm install @material-ui/icons

11. create index.html inside src folder



