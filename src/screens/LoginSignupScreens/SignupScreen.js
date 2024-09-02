import { View ,Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { colors, title, btn1, hr80 } from '../../globals/style';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from 'react';


const SignupScreen = ({ navigation }) => {
  const [emailfocus, setEmailfocus] = useState(false)
    const [userfocus, setUserfocus] = useState(false)
    const [phonefocus, setPhonefocus] = useState(false)
    const [passwordfocus, setPasswordfocus] = useState(false)
    const [cpasswordfocus, setcPasswordfocus] = useState(false)
    const [showpassword, setshowpassword] = useState(false)
    const [showcpassword, setshowcpassword] = useState(false)

  return (
    <ScrollView>
      <View style={styles.container}>

          <Text style={styles.head1}>Sign Up</Text>

          {/* Full Name Start */}
          <View style={styles.inputout}>
              <AntDesign name="user" size={24} color={userfocus === true ? colors.text1 : colors.text3} />
              <TextInput style={styles.input} placeholder='Full Name' 
              onFocus={() => {
                  setUserfocus(true)
                  setEmailfocus(false)
                  setPasswordfocus(false)
                  setcPasswordfocus(false)
                  setshowpassword(false)
                  setshowcpassword(false)

              }}/>
          </View>
          
          {/* Full Name End */}


          {/* Email Start */}
          {/* <View style={styles.inputout}>

              <Entypo name="email" size={24} color={emailfocus === true ? colors.text1 : colors.text3} />
              <TextInput style={styles.input} placeholder='Email' 
              onFocus={() => {
                  setEmailfocus(true)
                  setUserfocus(false)
                  setPhonefocus(false)
                  setPasswordfocus(false)
                  setcPasswordfocus(false)
                  setshowpassword(false)
                  setshowcpassword(false)
              }}/>
          </View> */}
          
          {/* Email End */}

          {/* Phone Start */}
          <View style={styles.inputout}>
              <Feather name="smartphone" size={24} color={phonefocus === true ? colors.text1 : colors.text3} />
              <TextInput style={styles.input} placeholder='Phone' 
              onFocus={() => {
                  setPhonefocus(true)
                  setEmailfocus(false)
                  setUserfocus(false)
                  setPasswordfocus(false)
                  setcPasswordfocus(false)
                  setshowpassword(false)
                  setshowcpassword(false)
              }}/>
          </View>

          {/* Phone End */}




          {/* Password Start */}
          <View style={styles.inputout}>
              <Feather name="lock" size={24} color={passwordfocus === true ? colors.text1 : colors.text3} />
              <TextInput style={styles.input} placeholder='Password' 
              onFocus={() => {
                  setPasswordfocus(true)
                  setEmailfocus(false)
                  setPhonefocus(false)
                  setUserfocus(false)
                  setcPasswordfocus(false)
              }}
                  secureTextEntry = {showpassword === false ? true : false}
              />
              <Feather name={showpassword == false ? "eye-off" : "eye"} size={24} color="black"
              onPress={() => setshowpassword(!showpassword)} />
          </View>

          <View style={styles.inputout}>
              <Feather name="lock" size={24} color={cpasswordfocus === true ? colors.text1 : colors.text3} />
              <TextInput style={styles.input} placeholder='Confirm Password' 
              onFocus={() => {
                  setcPasswordfocus(true)
                  setEmailfocus(false)
                  setPhonefocus(false)
                  setUserfocus(false)
                  setPasswordfocus(false)
              }}
                  secureTextEntry = {showcpassword === false ? true : false}
              />
              <Feather name={showcpassword == false ? "eye-off" : "eye"} size={24} color="black"
              onPress={() => setshowcpassword(!showcpassword)} />
          </View>

          {/* Password Ends */}

          <View style={btn1}>
              <TouchableOpacity >
                  <Text style={{ color: colors.col1, fontSize: title.btntxt, fontWeight: "bold",textAlign: "center"}}>
                      Sign Up
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

          <Text >Already have an accoun? 
              <Text style= {styles.signup} 
              onPress={() => navigation.navigate('loginpage')}> Sign In</Text></Text>      
      </View> 
    </ScrollView>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.col1,
      paddingTop: '25%',
      paddingBottom: '10%' ,
  },
  head1: {
      fontSize: title.title1,
      color: colors.text1,
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
      backgroundColor: "yellow",
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