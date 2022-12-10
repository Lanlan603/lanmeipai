const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      // 网易新闻--接口
      '/foo': {
        target: 'https://3g.163.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/foo': ''
        }
      },
      // 穷游接口
      '/boo': {
        target: 'https://www.qyer.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/boo': ''
        }
      }
    }
  }
})
