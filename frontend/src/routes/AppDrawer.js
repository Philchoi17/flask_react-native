import 'react-native-gesture-handler'
import React, { Component } from 'react'
import Config from '../config/Config'
import Styles from '../util/Styles'

// navigation libraries
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'

import { Image, Text, SafeAreaView, View, Button, TouchableOpacity } from 'react-native'

import { AnchorTag } from '../components/common'

// screens
// import LoginScreen from '../components/screens/Auth/LoginScreen'
// import SignupScreen from '../components/screens/Auth/SignupScreen'
import AboutScreen from '../components/screens/AboutScreen'
import SettingsScreen from '../components/screens/SettingsScreen'
import HomeScreen from '../components/screens/HomeScreen'

// stacks
import AuthStack from '../routes/AuthStack'

// stores
import { AuthStore } from '../stores/'
import { AuthContext } from '../providers/AuthProvider'

// creating Drawer Navigator variable
const Drawer = createDrawerNavigator()

// const { userObj } = AuthStore


class AppDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      langRefresh: true,
      loginRefresh: true
    }
  }

  static contextType = AuthContext

  render() {

    const { userObj, logout } = this.context
    console.log(userObj)
    // console.log(Object.keys(userObj).length == 0 && userObj.constructor == Object)
    return (
      <Drawer.Navigator initialRouteName={ Config.i18n('login') } drawerContent={props => {
        return (
          <DrawerContentScrollView { ...props } style={{
            backgroundColor: Styles.colors.mainBG
          }}>
            <SafeAreaView style={{ flex: 1 }}>
              <View
                style={{
                  height: 100,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 50,
                  marginTop: 50
                }}
              >
                <Image
                  source={ Styles.images.logo }
                  width={ 50 }
                  height={ 50 }
                />
              </View>
            </SafeAreaView>
            {/* this is where the drawer items
            are being rendered */}
            <DrawerItemList { ...props } />
            {/* toggle language here */}
            <TouchableOpacity
              onPress={() => {
                Config.getLanguage() == 'en' ? 
                Config.setLanguage('ko') : Config.setLanguage('en')
                this.setState({ langRefresh: !this.state.langRefresh })
              }}
            >
              <View
                style={{
                  height: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 15,
                }}
              >
                <Image
                  source={ Config.getLanguage() == 'en' ? Styles.images.usLangFlag : Styles.images.koLangFlag }
                  style={{
                    flex: 1,
                    width: 20,
                    resizeMode: 'contain'
                  }}
                />
              </View>
            </TouchableOpacity>
            <AnchorTag
              style={{
                paddingLeft: 10
              }}
              insideText={ Config.i18n('logout') }
              onPress={ logout }
            />
          </DrawerContentScrollView>
        )
      }}>
        {/* <Drawer.Screen 
          name={ Config.i18n('login') }
          component={ LoginScreen }
        />
        <Drawer.Screen 
          name={ Config.i18n('signup') }
          component={ SignupScreen }
        /> */}
        { Object.keys(userObj).length == 0 && userObj.constructor == Object ? 
          <Drawer.Screen 
            name={
              `${ Config.i18n('login') } / ${ Config.i18n('signup') }`
            }
            component={ AuthStack }
          /> : 
          <Drawer.Screen
            name={ Config.i18n('home') }
            component={ HomeScreen }
          /> }
        <Drawer.Screen
          name={ Config.i18n('about') }
          component={ AboutScreen }
        />
        <Drawer.Screen
          name={ Config.i18n('settings') }
          component={ SettingsScreen }
        />
      </Drawer.Navigator>
    )
  }
}

export default AppDrawer