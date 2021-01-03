import appConfig from './appConfig.json'
import PhoneStorage from '../util/PhoneStorage'
import Lang from '../util/Lang'

class Config {
  language
  environment
  user

  constructor() {
    console.log('Config: constructor.')
    for(let configKey in appConfig) {
      this[configKey] = appConfig[configKey]
      console.log(configKey, this[configKey])
    }
  }

  init() {
    console.log('init called from Config')
  }

  i18n(textKey) {
    // console.log('i18n: textKey:', textKey, this.language, Lang[this.language])
    if (Lang.hasOwnProperty(this.language) && Lang[this.language].hasOwnProperty(textKey)) {
      return Lang[this.language][textKey]
    }
    return ''
  }

  setUser(userObj) {
    this.user = userObj
    return PhoneStorage.saveItem('user', userObj)
  }

  getUser() {
    return this.user
    // return PhoneStorage.retrieveItem('user')
  }

  getLanguage() {
    return this.language
  }

  setLanguage(newLang) {
    this.language = newLang
    appConfig.language = newLang
    return PhoneStorage.saveItem('language', newLang)
  }

  getServerUrl() {
    return this[this.environment].serverUrl
  }

  setServerUrl = (newServer) => {
    this[this.environment].serverUrl = newServer
  }
}

export default new Config()