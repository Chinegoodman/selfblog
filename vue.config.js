module.exports = {
    publicPath:'./',
    devServer: {
        // open: false,
        // host: 'localhost',
        // port: 8080,
        // https: false,
        proxy: {
            '/juheapi': {
                target: 'https://v.juhe.cn',
                changeOrigin: true,
                ws:true,
                pathRewrite:{
                    '^/juheapi':''
                }
            },
            // https://api.komavideo.com/news
            '/newsapi': {
                target: 'https://api.komavideo.com',
                changeOrigin: true,
                ws:true,
                pathRewrite:{
                    '^/newsapi':''
                }
            },
            '/ooo0oapi': {
                target: 'https://www.ooo0o.com',
                changeOrigin: true,
                ws:true,
                pathRewrite:{
                    '^/ooo0oapi':''
                }
            },
        }
    }
}