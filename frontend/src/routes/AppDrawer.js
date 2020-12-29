import 'react-native-gesture-handler'
import React, { Component } from 'react'
import Config from '../config/Config'
import Styles from '../util/Styles'

// navigation libraries
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'

import { Image, Text, SafeAreaView, View, Button, TouchableOpacity } from 'react-native'

// screens
import LoginScreen from '../components/screens/Auth/LoginScreen'
import SignupScreen from '../components/screens/Auth/SignupScreen'
import AboutScreen from '../components/screens/AboutScreen'
import SettingsScreen from '../components/screens/SettingsScreen'

// const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()


class AppDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      langRefresh: true
    }
  }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator  initialRouteName={Config.i18n('login')} drawerContent={props => {
          return (
            <DrawerContentScrollView {...props} style={{
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
                    source={Styles.images.logo}
                    width={50}
                    height={50}
                  />
                </View>
              </SafeAreaView>
              <DrawerItemList {...props} />
              {/* <DrawerItem style={{ bottom: -50 }} label={Config.i18n('changeLang')} onPress={() => {
                Config.getLanguage() == 'en' ? 
                Config.setLanguage('ko') : Config.setLanguage('en')
                this.setState({ langRefresh: !this.state.langRefresh })
              }} /> */}
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
                    // borderWidth: 1,
                    // borderColor: 'black',
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 15,
                    // flexDirection: 'row'
                  }}
                >
                  <Image
                    source={Config.getLanguage() == 'en' ? Styles.images.usLangFlag : Styles.images.koLangFlag}
                    // width={10}
                    // height={10}
                    style={{
                      flex: 1,
                      width: 20,
                      // height: 10,
                      resizeMode: 'contain'
                    }}
                  />
                </View>
              </TouchableOpacity>
            </DrawerContentScrollView>
          )
        }}>
          <Drawer.Screen 
            name={ Config.i18n('login') }
            component={ LoginScreen }
          />
          <Drawer.Screen 
            name={ Config.i18n('signup') }
            component={ SignupScreen }
          />
          <Drawer.Screen
            name={ Config.i18n('about') }
            component={ AboutScreen }
          />
          <Drawer.Screen
            name={ Config.i18n('settings') }
            component={ SettingsScreen }
          />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}

export default AppDrawer