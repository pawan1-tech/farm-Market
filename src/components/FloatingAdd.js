import { StyleSheet, Text, View, TouchableOpacity,Image  } from 'react-native';
import React from 'react';
import Fontisto from '@expo/vector-icons/Fontisto';
import { colors } from '../globals/style';

const FloatingAdd = () => {
  return (
    <TouchableOpacity style={styles.floatingChatIcon}>
        <Fontisto name="plus-a" size={30} color="#fff" />
        
    </TouchableOpacity>
  )
}

export default FloatingAdd

const styles = StyleSheet.create({
    floatingChatIcon: {
        position: 'absolute',
        bottom: 140, // adjust the bottom margin to position it above the Bottom Navigation
        right: 20,
        zIndex: 1, // ensure it's on top of the Bottom Navigation
        backgroundColor: '#009688',
        borderRadius: 50,
        borderWidth: 1,
        padding: 10,
        elevation: 10,
      },
      
})