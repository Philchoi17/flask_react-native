import Config from '../config/Config'

import AuthRequests from '../services/Auth/AuthRequests'

class AuthStore {
  userObj = {}

  setUserObj(userObj) {
    this.userObj = userObj
  }

  test = 'string'

  login(username, password) {
    return AuthRequests.userLogin(username, password)
  }

  logout() {
    this.userObj = {}
    Config.setUser({})
  }
}

export default new AuthStore()