import React, { Component, useContext } from 'react'
import { Alert, TouchableOpacity, Text } from 'react-native'
import Config from '../../../config/Config'

import { Input, Background, StyledButton, StyledImage, AnchorTag } from '../../common'
import Styles from '../../../util/Styles'

import { AuthContext } from '../../../providers/AuthProvider'

class LoginScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '', 
    }
    this.login = this.login.bind(this)
  }

  static contextType = AuthContext

  login() {
    // console.log(props)
    if(this.state.username != '' && this.state.password != '') {
      console.log('going in the login')
      this.context.login(this.state.username, this.state.password)
        .then(loggedIn => {
          if(loggedIn) {
            console.log('SUCCESS', loggedIn)
            // console.log(this.props.navigation)
            this.props.navigation.navigate('Home')
            return
          }
          Alert.alert(
            'Unable to Login',
            'Invalid Credentials',
            [
              { text: 'Cancel', style: 'cancen' },
              { text: 'OK' }
            ], { cancelable: false }
          )
        }).catch(err => {
          console.log('LoginScreen: login: err', err)
          Alert.alert(
            'Unable to Login',
            'Error',
            [
              { text: 'Cancel', style: 'cancen' },
              { text: 'OK' }
            ], { cancelable: false }
          )
        })
      // if(loginSuccess) console.log('SUCCESS')
      // else Alert.alert(
      //   'Unable to Login',
      //   'Invalid Credentials',
      //   [
      //     { text: 'Cancel', style: 'cancen' },
      //     { text: 'OK' }
      //   ], { cancelable: false }
      // )
      return
    }
    Alert.alert(
      'Unable to Login',
      'Incorrect Fields',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    )
  }



  render() {
    console.log('LoginScreen: render: this.context:', this.context)
    const { navigation } = this.props

    const { userObj } = this.context

    return (
      <Background moreStyle={ Styles.layouts.centerView }>
        <StyledImage source={ require('../../../assets/images/logo/generic-logo.png') } />
        <Input 
          title='Username'
          onChangeText={ text => {
            console.log('LoginScreen: onChangeText: Username:', text)
            this.setState({ username: text }) 
          }}
        />
        <Input 
          title='Password' 
          isPassword={true}
          onChangeText={ text => {
            console.log('LoginScreen: onChangeText: Password:', text)
            this.setState({ password: text })
          }}
        />
        {/* <Text>Login Screen</Text> */}
        <StyledButton         
          buttonText={Config.i18n('login')}
          onPress={this.login}
        />
        <TouchableOpacity onPress={() => {
          console.log('testing')
          console.log('LoginScreen: Testing: AuthContext: UserObj', userObj)
        } }>
          <Text>testing button</Text>
        </TouchableOpacity>
        <AnchorTag
          onPress={ () => navigation.navigate('Signup') }
          insideText={ Config.i18n('signup') }
        />
        <AnchorTag
          insideText='forgot password'
        />
      </Background>
    )
  }
}

export default LoginScreen