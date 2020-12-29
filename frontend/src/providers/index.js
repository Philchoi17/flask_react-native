// import { NavigationContainer } from '@react-navigation/native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native'

import Routes from '../routes'
// --
import AuthProvider from './AuthProvider'

class Providers extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SafeAreaView>
    )
  }
}

export default Providers