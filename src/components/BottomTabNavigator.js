import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import UserScreen from '../screens/(Tabs)/UserScreen';
import ProductScreen from '../screens/(Tabs)/ProductScreen';
import CartScreen from '../screens/(Tabs)/CartScreen';
import MenuScreen from '../screens/(Tabs)/MenuScreen';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabBarIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarLabel: {
    fontSize: 12,
    marginBottom: 5,
  },
  tabBar: {
    backgroundColor: '#fff',
    borderTopWidth: 0,
    height: 65,
    // paddingBottom: 10,
  },
});

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#009688',
        tabBarInactiveTintColor: '#ccc',
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="user"
        component={UserScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="circle-user" size={size} color={color} />
          ),
          tabBarLabel: 'User',
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="Products"
        component={ProductScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
          tabBarLabel: 'Products',
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="shoppingcart" size={size} color={color} />
          ),
          tabBarLabel: 'Cart',
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
      <Tab.Screen
        name="menu"
        component={MenuScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="bars" size={size} color={color} />
          ),
          tabBarLabel: 'Menu',
          tabBarLabelStyle: styles.tabBarLabel,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;