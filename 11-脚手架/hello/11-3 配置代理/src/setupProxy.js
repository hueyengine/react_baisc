const prox = require('http-proxy-middleware');
// react 脚手架在初始化的时候，会自动安装 http-proxy-middleware 这个库
module.exports = function (app) {
    app.use(
        prox('/api1', {
            target: 'http://localhost:5000',
            changeOrigin: true,
            pathRewrite: { '^/api1': '' },
        }),
        prox('/api2', {
            target: 'http://localhost:5001',
            changeOrigin: true,
            pathRewrite: { '^/api2': '' },
        }),
    );
};

/**
 * 这个文件的名字必须是 setupProxy.js，react 脚手架会自动识别这个文件，并把它的内容加到 webpack 配置中
 * webpack 用的是 CJS 的模块导出语法
 * 这个文件不能用 ES6 的模块导出语法，只能用 CommonJS 的模块导出语法
 */
