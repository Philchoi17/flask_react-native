import React, { Component } from 'react'
import { AuthStore } from '../stores'

export const AuthContext = React.createContext(AuthStore)

class AuthProvider extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <AuthContext.Provider value={ AuthStore }>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider