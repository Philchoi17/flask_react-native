import React, { Component } from 'react';
import { View, Text, TextInput, Platform, StyleSheet } from 'react-native';
import Styles from '../../util/Styles'

class Input extends Component {

  constructor(props) {
    console.log('common: Input: props:', props)
    super(props)
    this.state = {
      title: props.title,
      containerStyle: props.containerStyle,
      isPassword: props.isPassword || false,
      isFocused: false,
      autoCorrect: props.autoCorrect || false
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleFocus() {
    this.setState({ isFocused: true })
    console.log(this.state)
  }

  handleBlur() {
    this.setState({ isFocused: false })
  }

  render() {
    return (
      <View style={ [styles.inputContainer] }>
        <Text style={ styles.text }>{ this.state.title }</Text>
        <TextInput
          autoCapitalize='none'
          autoCorrect={ this.state.autoCorrect }
          onFocus={ this.handleFocus }
          onBlur={ this.handleBlur }
          style={ [styles.input, {
            borderColor: this.state.isFocused 
              ? Styles.colors.mainBorders
              : Styles.colors.secondaryBorders
          }] }
          secureTextEntry={ this.state.isPassword }
        />
      </View>
    )
  }
}

const styles = {
  inputContainer: {
    width: '75%',
    // alignContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  input: {
    borderWidth: 1,
    width: '100%',
    borderRadius: 5,
    height: 40,
    paddingLeft: 5,
    // backgroundColor: Styles.colors.secondaryBG
  },
  text: {
    position: 'absolute',
    bottom: 30,
    zIndex: 10,
    left: 25,
    backgroundColor: Styles.colors.mainBG,
    color: Styles.colors.darkText
  }
}

export default Input