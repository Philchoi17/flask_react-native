import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Styles from '../../util/Styles'

class Background extends Component {
  constructor(props) {
    super(props)
    this.state = {
      random: props.randomObj,
      moreStyle: props.moreStyle
    }
  }
  
  render() {
    return (
      <View style={[styles.viewColor, this.state.moreStyle]}>
        { this.props.children }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  viewColor: {
    flex: 1,
    backgroundColor: Styles.colors.mainBG
  }
})

export default Background