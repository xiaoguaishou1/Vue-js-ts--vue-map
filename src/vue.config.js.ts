module.exports = {
  //额外的webpack配置使用一个回调函数来返回新的config
  configureWebpack: (config:any) => {
    config.externals = {'AMap': 'AMap'};
  },
}
