import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text, Button } from '@tarojs/components'
import { namespace } from '@/models/module/home/home'
import ChildComponent from './cild-component'
import './index.less'
@connect(models => {
  return {
    ...models[namespace]
  }
})
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  handleClear() {
    this.props.dispatch({
      type: `${namespace}/setState`,
      payload: {
        testObj: {}
      }
    })
  }
  handleAdd() {
    const { testObj } = this.props
    const tmp = JSON.parse(JSON.stringify(testObj))
    tmp['test' + (Math.random() * 100).toFixed(2)] =
      'value' + Math.random().toFixed(2)
    this.props.dispatch({
      type: `${namespace}/setState`,
      payload: {
        testObj: tmp
      }
    })
  }

  render() {
    const { testObj } = this.props
    const testArr = Object.keys(testObj).map(key => {
      return { _key: key, value: testObj[key] }
    })
    const objMapToList = Object.keys(testObj).map(key => {
      return (
        <Text key={key}>
          {key}：{testObj[key]}
        </Text>
      )
    })
    const arrMapToList = testArr.map(it => {
      const { _key, value } = it
      return (
        <Text key={_key}>
          {_key}：{value}
        </Text>
      )
    })
    return (
      <View className='index'>
        <View className='wrapper obj'>
          <Text className='title'>父组件数据【对象】数据映射</Text>
          {objMapToList}
        </View>
        <View className='wrapper arr'>
          <Text className='title'>父组件数据【数组】数据映射</Text>
          {arrMapToList}
        </View>
        <ChildComponent testObj={testObj} testArr={testArr} />
        <Button onClick={this.handleClear}>清空store的数据</Button>
        <Button onClick={this.handleAdd}>dispatch数据到store</Button>
      </View>
    )
  }
}
