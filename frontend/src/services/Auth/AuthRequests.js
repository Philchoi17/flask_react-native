import axios from 'axios'
import Config from '../../config/Config'
import { AuthStore } from '../../stores'

class AuthRequests {
  async userLogin(username, password) {
    console.log('AuthRequests: userLogin:', username, password)
    
    return axios.post(Config.getServerUrl() + '/login', { username, password })
      .then(res => {
        console.log('AuthRequests: userLogin:', res.data)
        if(res.data.login == 'ok') {
          console.log('AuthRequests: userLogin:', res.data.login)
          Config.setUser(res.data.user)
          AuthStore.setUserObj(res.data.user)
          return true
        }
        console.log('NEVER GETS HERE')
        return false
        // console.log('AuthRequests: userLogin:', AuthStore.userObj)
      }).catch(err => console.log('AuthRequests: userLogin:', err))
    
  }
}

export default new AuthRequests()