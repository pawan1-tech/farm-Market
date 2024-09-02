import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from '../../../assets/logo.png'
import { colors, hr80} from '../../globals/style'
import React from 'react'

const WelcomeScreen = ({ navigation }) => {
  return (
    <View  style={styles.container}>
    <Text style={styles.title}>Welcome to Farm Mart</Text>

    <View style={styles.logout}>
        <Image source={logo} style={styles.logo}/>
    </View>

    <View style={hr80}/>
    <Text style={styles.text}>Simple and Easy Farm Trading at Affordable Prices!</Text>
    <View style={hr80}/>

    <View style={styles.btnout}>
        <TouchableOpacity onPress={() => navigation.navigate('signinpage')}>
            <Text style={styles.btn}>Sign up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('loginpage')}>
            <Text style={styles.btn}>Log In</Text>
        </TouchableOpacity>

    </View>
  </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2D6A4F",
      // paddingTop: 80,
      width:"100%",
      alignItems: "center",
      justifyContent: "center",
  },
  title: {
      fontSize: 50,
      color: colors.col1,
      textAlign: 'center',
      marginVertical: 10,
      fontWeight: '200',
  },
  logout: {
      width: '80%',
      height: '40%',
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
  },
  logo: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
  },
  text: {
      fontSize: 18,
      width: '80%',
      color: colors.col1,
      textAlign: 'center',
  },
  btnout: {
      flexDirection: 'row',
  },
  btn: {
      fontSize: 20,
      color: colors.text1,
      textAlign: 'center',
      marginVertical: 30,
      marginHorizontal: 10,
      fontWeight: '700',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 10,
      paddingHorizontal: 20,
  }
})