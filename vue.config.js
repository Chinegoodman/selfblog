module.exports = {
    publicPath:'./',
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
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
            '/json': {
                target: 'http://www.ooo0o.com/json',
                changeOrigin: true,
                ws:true,
                // pathRewrite:{
                //     '^/json':''
                // }
            },
        }
    }
}