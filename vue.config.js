const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
chainWebpack: (config) => {
  config
      .plugin('html')
      .tap(args => {
          args[0].title = 'Monster Hunter guide';
          args[0].meta = {viewport: 'width=device-width,initial-scale=1,user-scalable=no'};

       return args;
  })
}