import axios from 'axios'
import Config from '../../config/Config'

class AuthRequests {
  userLogin(username, password) {
    console.log('AuthRequests: userLogin:', username, password)
    axios.post(Config.getServerUrl() + '/login', { username, password })
      .then(res => {
        console.log('AuthRequests: userLogin:', res.data)
      }).catch(err => console.log('AuthRequests: userLogin:', err))
  }
}

export default new AuthRequests()