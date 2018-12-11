const envConfig = {
  dev: require('../config/config.dev'),
  prod: require('../config/config.prod'),
  test: require('../config/config.test')
}
const config = {
  host: '',
  baseUrl: '',
  amapkey: '',
  appId: '',
  authKey: ''
}
const env = process.env.NODE_ENV
export default Object.assign({}, config, envConfig[env] || {})
