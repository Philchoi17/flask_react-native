import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Styles from '../../util/Styles'

class AboutScreen extends Component {
  render() {
    return (
      <View style={ Styles.layouts.centerView }>
        <Text>About Screen</Text>
      </View>
    )
  }
}

export default AboutScreen