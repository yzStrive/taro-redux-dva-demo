const path = require('path')

const config = {
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  projectName: 'tarojs',
  date: '2018-11-7',
  designWidth: 750,
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: {
    babel: {
      sourceMap: true,
      presets: ['env'],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread'
      ]
    }
  },
  defineConstants: {},
  alias: {
    '@': path.resolve(__dirname, '../src')
  },
  weapp: {},
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
}
module.exports = function(merge) {
  try {
    return merge({}, config, require(`./${process.env.NODE_ENV}`))
  } catch (e) {
    return merge({}, config)
  }
}
