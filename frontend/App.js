import 'react-native-gesture-handler'
import React, { Component } from 'react'

// navigation libraries
// import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'

// import SafeAreaView

// navigation stacks
// import AppDrawer from './src/routes/AppDrawer'
// routes
// import Routes from './src/routes'

import Providers from './src/providers'

import Config from './src/config/Config'


// const Stack = createStackNavigator()
// const Drawer = createDrawerNavigator()


class App extends Component {
  render() {
    return (
      <Providers />
    )
  }
}

export default App