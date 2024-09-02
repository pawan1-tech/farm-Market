import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { colors } from '../globals/style';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>

        <View style={styles.boos}>
          <View style={styles.box}>
            <View style={styles.imgBox}>
                <Image source={require('../../assets/category/seed1.gif')} style={styles.myicon} />

              </View>
              <Text style={styles.text}>Seeds</Text>

            </View>
          <View style={styles.box}>
            <View style={styles.imgBox}>
                <Image source={require('../../assets/category/product.gif')} style={styles.myicon} />

              </View>
              <Text style={styles.text}>Products</Text>

          </View>
          <View style={styles.box}>
            <View style={styles.imgBox}>
              <Image source={require('../../assets/category/fertilizer.gif')} style={styles.myicon} />

            </View>
            {/* <FontAwesome5 name="hamburger" size={24} color="black" style={styles.myicon}/> */}
            <Text style={styles.text}>Fertilizers</Text>

          </View>

        </View>

      
        
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.col1,
    // backgroundColor: 'red',
    width: '90%',
    height: 170,
    // alignItems: 'center',
    elevation: 10,
    borderRadius: 10,
  },

  head: {
    color: colors.text1,
    fontSize: 25,
    fontWeight: '300',
    margin: 10,
    alignSelf: 'center',
    paddingBottom: 5,
    borderBlockColor: colors.text1,
    borderBottomWidth: 1,
  },
  boos: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around'
  },
  box: {
    backgroundColor: colors.col1,
    elevation: 20,
    margin: 10,
    padding: 10,
    height: 90,
    width: 95,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'column'
  },
  imgBox: {
    height: 60,
    width: 60,
    backgroundColor: colors.col1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myicon: {
    color: colors.text3,
    marginBottom: 10,
    height: '100%',
    width: '100%',
  },
  
})