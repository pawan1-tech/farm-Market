import { View ,Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { colors, title, btn1, hr80 } from '../../globals/style';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';

const LoginScreen = ({ navigation }) => {

  const [emailfocus, setEmailfocus] = useState(false)
  const [passwordfocus, setPasswordfocus] = useState(false)
  const [showpassword, setshowpassword] = useState(false)

  return (
    <ScrollView>
        <View style={styles.container}>

            <Text style={styles.head1}>Sign In</Text>

            <View style={styles.inputout}>
                <AntDesign name="user" size={24} color={emailfocus === true ? colors.text1 : colors.text3} />
                <TextInput style={styles.input} placeholder='Email' 
                onFocus={() => {
                    setEmailfocus(true)
                    setPasswordfocus(false)
                    setshowpassword(false)
                }}/>
            </View>

            <View style={styles.inputout}>
                <Feather name="lock" size={24} color={passwordfocus === true ? colors.text1 : colors.text3} />
                <TextInput style={styles.input} placeholder='Password' 
                onFocus={() => {
                    setPasswordfocus(true)
                    setEmailfocus(false)
                }}
                    secureTextEntry = {showpassword === false ? true : false}
                />
                <Feather name={showpassword == false ? "eye-off" : "eye"} size={24} color="black"
                onPress={() => setshowpassword(!showpassword)} />
            </View>

            <View style={btn1}>
                <TouchableOpacity onPress={() => navigation.navigate('homepage')}>
                    <Text style={{ color: colors.col1, fontSize: title.btntxt, fontWeight: "bold",textAlign: "center"}}>
                        Sign in
                    </Text>

                </TouchableOpacity>

            </View>
            <Text style = {styles.forgot}>Forgot Password?</Text>
            <Text style = {styles.or}>OR</Text>
            <Text style = {styles.gftext}>Sign In With </Text>

            <View style={styles.gf}>
                <TouchableOpacity style={styles.gficon}>
                    <AntDesign name="google" size={24} color="#Ea4335" />

                </TouchableOpacity>
                <TouchableOpacity style={styles.gficon}>
                    <FontAwesome5 name="facebook-f" size={24} color="#4267B2" />
                </TouchableOpacity>
                
            </View>

            <View style={hr80}>
            </View>   

            <Text>Don't have an accoun? 
                <Text style= {styles.signup} 
                onPress={() => navigation.navigate('signinpage')}> Sign Up</Text></Text>        

        </View> 
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: '30%',
  },
  head1: {
      fontSize: title.title1,
      color: colors.text1,
      marginBottom: '30%',
      textAlign: 'center',
      marginVertical: 10,
  },
  inputout: {
      flexDirection: 'row',
      width: '80%',
      marginVertical: 10,
      backgroundColor: colors.col1,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      alignSelf: 'center',
      elevation: 20,
  },
  input: {
      flex: 1,
      fontSize: 18,
      marginLeft: 10,
  },
  btn1: {
      width: '100%',
      height: 50,
      backgroundColor: 'red',
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      elevation: 10,
      color: 'white',
  },
  forgot: {
      width: '100%',
      color: colors.text2,
      marginTop: 20,
      marginBottom: 10,
      textAlign: 'center',
  },
  or: {
      width: '100%',
      color: colors.text1,
      marginVertical: 10,
      fontWeight: 'bold',
      textAlign: 'center',
  },
  gftext: {
      width: '100%',
      color: colors.text2,
      marginVertical: 10,
      fontSize: 25,
      textAlign: 'center',
  },
  gf: {
      flexDirection: 'row', 
      alignSelf: 'center',
  },
  gficon: {
      backgroundColor: 'white',
      width: 50,
      margin: 10,
      borderRadius: 10,
      padding: 10,
      alignItems: 'center',
      elevation: 20,
  },
  hr80: {
      width: '80%',
      borderBottomColor: 'red',
      borderBottomWidth: 10,
      marginVertical: 20,
  },
  signup: {
      color: colors.text1,
      fontWeight: 'bold',
  }
});