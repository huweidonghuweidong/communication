module.exports = {
    outputDir:process.env.NODE_ENV, //根据不同的环境打包不同的文件名称
    devServer:{
        port:8080,
        proxy:{
            '/api':{
                target:'https://douban.uieee.com',
                changeOrigin:true
            }
        }
    }
}