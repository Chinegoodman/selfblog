module.exports = {
    publicPath:'./',
    devServer: {
        // open: false,
        // host: 'localhost',
        // port: 8080,
        // https: false,
        proxy: {
            '/juheapi': {
                target: 'http://v.juhe.cn',
                changeOrigin: true,
                ws:true,
                pathRewrite:{
                    '^/juheapi':''
                }
            },
            // http://api.komavideo.com/news
            '/newsapi': {
                target: 'http://api.komavideo.com',
                changeOrigin: true,
                ws:true,
                pathRewrite:{
                    '^/newsapi':''
                }
            },
            '/ooo0oapi': {
                target: 'http://www.ooo0o.com',
                changeOrigin: true,
                ws:true,
                pathRewrite:{
                    '^/ooo0oapi':''
                }
            },
        }
    }
}