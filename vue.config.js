module.exports = {
    chainWebpack: config => {
        //判断是否处于项目发布阶段
        config.when(process.env.NODE_ENV == 'production', config => {
            config.entry('app').clear().add('/src/main.js')
        })
        //产品开发阶段
        config.when(process.env.NODE_ENV == 'development', config => {
            //entry得到默认的打包入口，clear情况默认打包入口，add新增自定义打包入口
            config.entry('app').clear().add('/src/main.js')
        })
    }
}