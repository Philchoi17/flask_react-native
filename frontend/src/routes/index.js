import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
// navigators
import AppDrawer from './AppDrawer'
// import AppTabs from './AppTabs'

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <NavigationContainer>
        <AppDrawer />
      </NavigationContainer>
    )
  }
}

export default Routes