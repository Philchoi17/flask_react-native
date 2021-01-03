import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

// importing screens for auth stack
import { 
  LoginScreen,
  SignupScreen
} from '../components/screens/Auth'

const Stack = createStackNavigator()

class AuthStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerTitleAlign: 'center'
        }}
      >
        <Stack.Screen 
          name='Login'
          component={ LoginScreen }
          options={{
            headerTitle: 'Login'
          }}
        />
        <Stack.Screen 
          name='Signup'
          component={ SignupScreen }
          options={{
            headerTitle: 'Signup'
          }}
        />
      </Stack.Navigator>
    )
  }
}

export default AuthStack
