import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native'
import Config from '../../config/Config'
import { AuthStore } from '../../stores'

class HomeScreen extends Component {
  render() {
    const { navigation } = this.props
    return (
      <View style={ styles.centerView }>
        <Text>Home Screen</Text>
        <Button 
          title='Go to Profile'
          onPress={ () => navigation.navigate('Profile') }
        />
        <Button 
          title='testing'
          onPress={ () => console.log(Config.lang, Config.serverURL) }
        />
        <Button
          title='testing UserObj'
          onPress={ () => console.log(AuthStore.userObj) }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  }
})

export default HomeScreen