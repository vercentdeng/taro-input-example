import { Component } from 'react'
import { View, Input } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const dataSource= Array(800).fill(0);
    return (
      <View className='index'>
        {dataSource.map((data, index) => (
          <Input key={index} placeholder='请输入' />
        ))}
      </View>
    )
  }
}
