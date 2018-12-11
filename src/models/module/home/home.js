import Taro from '@tarojs/taro'

const namespace = 'home'
export { namespace }
export default {
  namespace,
  state: {
    testObj: {}
  },

  effects: {},

  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
