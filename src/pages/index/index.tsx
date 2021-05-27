import { Component } from 'react'
import withWeapp from '@tarojs/with-weapp'
import { View, Text } from '@tarojs/components'
import './index.scss'

const page = {
  onLoad(options) {
    console.error('onLoad', options)
    options.a = '1'
  },
  onShow(){
    console.error('onShow')
  }
}

@withWeapp(page)
export default class Index extends Component {


  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
