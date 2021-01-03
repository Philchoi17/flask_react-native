import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import Styles from '../../util/Styles'

class AnchorTag extends Component {
  constructor(props) {
    super(props)
    this.state = {
      insideText: props.insideText
    }
  }
  render() {
    return (
      <View>
        <TouchableOpacity { ...this.props }>
          <Text
            style={ styles.anchorText }
          >{ this.state.insideText }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  anchorText: {
    color: Styles.colors.mainBorders,
    fontSize: 18,
    fontWeight: '300'
  }
})

export default AnchorTag