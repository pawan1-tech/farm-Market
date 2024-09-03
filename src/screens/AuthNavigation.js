import React, { Component } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './LoginSignupScreens/WelcomeScreen';
import LoginScreen from './LoginSignupScreens/LoginScreen';
import SignupScreen from './LoginSignupScreens/SignupScreen';
import HomeScreen from './HomeScreen';
import UserScreen from './(Tabs)/UserScreen';
import PreBookingScreen from './(Tabs)/PreBookingScreen';
import AddScreen from './(Tabs)/AddScreen';
import CartScreen from './(Tabs)/CartScreen';
import MenuScreen from './(Tabs)/MenuScreen';


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

        <Stack.Screen name="userpage" component={UserScreen}  
            options ={{
                headerShown: false,
            }}
        />

        <Stack.Screen name="prebookingpage" component={PreBookingScreen}  
            options ={{
                headerShown: false,
            }}
        />

        <Stack.Screen name="addpage" component={AddScreen}  
            options ={{
                headerShown: false,
            }}
        />

        <Stack.Screen name="cartpage" component={CartScreen}  
            options ={{
                headerShown: false,
            }}
        />


        <Stack.Screen name="menupage" component={MenuScreen}  
            options ={{
                headerShown: false,
            }}
        />

      </Stack.Navigator>
    )
  }
}

export default AuthNavigation