import { action, decorate, observable } from 'mobx'
import Config from '../config/Config'

import AuthRequests from '../services/Auth/AuthRequests'

class AuthStore {
  userObj = {}

  test = 'string'

  login(username, password) {
    AuthRequests.userLogin(username, password)
  }
}

// decorate(AuthStore, {
//   userObj: observable,
//   login: action
// })

export default new AuthStore()