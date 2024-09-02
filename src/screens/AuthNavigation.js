import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './LoginSignupScreens/WelcomeScreen';
import LoginScreen from './LoginSignupScreens/LoginScreen';
import SignupScreen from './LoginSignupScreens/SignupScreen';
import HomeScreen from './HomeScreen';


const Stack = createNativeStackNavigator();
export class AuthNavigation extends Component {
  render() {
    return (
        <Stack.Navigator initialRouteName='welcomepage'>
        <Stack.Screen name="welcomepage" component={WelcomeScreen} 
            options ={{
                headerShown: false,
            }}
        />

        <Stack.Screen name="loginpage" component={LoginScreen} 
            options ={{
                headerShown: false,
            }}
        />        
        
        <Stack.Screen name="signinpage" component={SignupScreen}  
            options ={{
                headerShown: false,
            }}
        />

        <Stack.Screen name="homepage" component={HomeScreen}  
            options ={{
                headerShown: false,
            }}
        />
      </Stack.Navigator>
    )
  }
}

export default AuthNavigation