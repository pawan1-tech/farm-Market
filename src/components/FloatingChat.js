import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../globals/style';


const FloatingChat = () => {
  return (
    <TouchableOpacity style={styles.floatingChatIcon}>
        <AntDesign name="message1" size={30} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingChatIcon: {
    position: 'absolute',
    bottom: 80, // adjust the bottom margin to position it above the Bottom Navigation
    right: 20,
    zIndex: 1, // ensure it's on top of the Bottom Navigation
    backgroundColor: '#009688',
    borderRadius: 50,
    borderWidth: 1,
    padding: 10,
    elevation: 10,
  },
});

export default FloatingChat;