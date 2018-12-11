import Taro from '@tarojs/taro'

const errorCode = {
  c10002: 10002,
  c10019: 10019,
  c10020: 10020,
  c250001: 250001,
  c250002: 250002,
  c250003: 250003,
  c250004: 250004,
  c250005: 250005,
  c330024: 330024
}
const errorMsg = ''

function handleCommonError(err, options) {
  const { code } = err
  switch (code) {
    case errorCode.c10002:
    case errorCode.c10019:

    default: {
      if (!options.noErrorTip) {
        handleNoCommontError(err.message)
      }
    }
  }
}
function handleNoCommontError(message) {
  Taro.showToast({
    title: message,
    icon: 'none'
  })
}
export { handleCommonError, handleNoCommontError, errorMsg, errorCode }
