module.exports = {
    devServer: {
        host: "0.0.0.0",
        port: "9527",
        open: true,
        proxy: { //配置代理解决vue中的跨域问题 
            "/api": {
                target: "https://x.dscmall.cn/api", //要代理的域名
                changeOrigin: true, //开启代理，允许跨域访问
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
}


// "http://114.215.173.225:3000/api/"