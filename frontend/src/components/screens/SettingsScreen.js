import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import Config from '../../config/Config'

import Styles from '../../util/Styles'

class SettingsScreen extends Component {

  constructor(props) {
    super(props)
    this.state = {
      langRefresh: true
    }
  }

  render() {
    return (
      <View style={Styles.layouts.centerView}>
        <Text>{ Config.i18n('settings') }</Text>
        <Button 
          title='change lang'
          onPress={() => {
            console.log('language working?')
            Config.getLanguage() == 'en' ? 
            Config.setLanguage('ko') : Config.setLanguage('en')

            this.setState({ langRefresh: !this.state.langRefresh })
          }}
        />
      </View>
    )
  }
}

export default SettingsScreen