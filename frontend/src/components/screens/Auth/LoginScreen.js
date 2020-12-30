import React, { Component, useContext } from 'react'
import { View, Text } from 'react-native'
import Config from '../../../config/Config'

import { Input, Background, StyledButton, StyledImage } from '../../common'
import Styles from '../../../util/Styles'

import { AuthContext } from '../../../providers/AuthProvider'
import AuthStore from '../../../stores/AuthStore'

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    }
  }

  login() {
    AuthContext.login()
  }

  render() {
    return (
      <Background moreStyle={ Styles.layouts.centerView }>
        <StyledImage source={ require('../../../assets/images/logo/generic-logo.png') } />
        <Input title='Username' />
        <Input title='Password' isPassword={true} />
        {/* <Text>Login Screen</Text> */}
        <StyledButton         
          buttonText={Config.i18n('login')}
          onPress={ () => {
            AuthStore.login('test', 'test')
          } }
        />
      </Background>
    )
  }
}

export default LoginScreen