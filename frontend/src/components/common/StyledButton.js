import React, { Component } from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import Styles from '../../util/Styles'

class StyledButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      buttonText: props.buttonText,
      extraStyle: props.extraStyle
    }
  }

  render() {
    return (
      <View style={ styles.buttonContainer }>
        <TouchableOpacity { ...this.props } style={ [styles.button, this.state.extraStyle] }>
          <Text>{ this.state.buttonText }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderColor: Styles.colors.mainBorders,
    borderRadius: 3
  },
  button: {
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Styles.colors.mainBorders,
    color: Styles.colors.lightText,
    borderRadius: 3
  }
})

export default StyledButton