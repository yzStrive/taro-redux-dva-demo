import Taro, { Component } from '@tarojs/taro'
import { View, Text, Block } from '@tarojs/components'
import '../index.less'

export default class ChildComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { testObj, testArr } = this.props
    const objMapToList = Object.keys(testObj).map(key => {
      return (
        <Text key={key}>
          {key}： {testObj[key]}
        </Text>
      )
    })
    const arrMapToList = testArr.map(it => {
      const { _key, value } = it
      return (
        <Text key={_key}>
          {_key}： {value}
        </Text>
      )
    })
    return (
      <Block>
        <View className='wrapper obj'>
          <Text className='title'>子组件数据【对象】数据映射</Text>{' '}
          {objMapToList}
        </View>
        <View className='wrapper arr'>
          <Text className='title'>子组件数据【数组】数据映射</Text>{' '}
          {arrMapToList}
        </View>
      </Block>
    )
  }
}
ChildComponent.defaultProps = {
  testObj: {},
  testArr: []
}
