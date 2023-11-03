const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  // css: {
  //   loaderOptions: {
  //     less: {
  //       // 将全局变量定义在这里，如果需要的话
  //       additionalData: `@import "@/assets/variables.less";`,
  //     },
  //   },
  // },
};
