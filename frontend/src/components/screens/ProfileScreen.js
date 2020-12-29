import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

class ProfileScreen extends Component {
  render() {

    const { navigation } = this.props

    return (
      <View style={styles.centerView}>
        <Text>Profile Screen</Text>
        <Button
          title='go home'
          onPress={() => navigation.navigate('Home')}
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

export default ProfileScreen