import React, { Component } from 'react'

// navigators
import AppDrawer from './AppDrawer'
// import AppTabs from './AppTabs'

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <AppDrawer />
  }
}

export default Routes