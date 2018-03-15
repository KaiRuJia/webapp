const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
    entry: {
        main:'./src/script/main.js',
        a:'./src/script/a.js',
        b:'./src/script/b.js',
        c:'./src/script/c.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-[chunkhash].js',
        publicPath:'http://cdn.com/'
    },
    plugins:[
        new htmlWebpackPlugin({
            // filename:'index-[hash].html',
            filename:'a.html',
            template:'index.html',
            // inject:'head',   // 脚本放的位置
            inject:false,   // 脚本放的位置
            title:'a ',
            date: new Date(),
            // minify: {
            //     removeComments:true,   // 压缩移除注释
            //     collapseWhitespace:true  // 压缩移除空格
            // }
            chuncks:['a']
        }),
        new htmlWebpackPlugin({
            // filename:'index-[hash].html',
            filename:'b.html',
            template:'index.html',
            // inject:'head',   // 脚本放的位置
            inject:false,   // 脚本放的位置
            title:'b ',
            date: new Date(),
            // minify: {
            //     removeComments:true,   // 压缩移除注释
            //     collapseWhitespace:true  // 压缩移除空格
            // }
            chuncks:['b']
        }),
        new htmlWebpackPlugin({
            // filename:'index-[hash].html',
            filename:'c.html',
            template:'index.html',
            // inject:'head',   // 脚本放的位置
            inject:false,   // 脚本放的位置
            title:'b ',
            date: new Date(),
            // minify: {
            //     removeComments:true,   // 压缩移除注释
            //     collapseWhitespace:true  // 压缩移除空格
            // }
            chuncks:['c']
        })
    ]
};

module.exports = config;