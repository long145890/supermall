module.exports = {
  // 该文件配置会和公共配置进行合并
  configureWebpack: {
    resolve: {
      alias: {//别名 默认已经配置过@对应src
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}

