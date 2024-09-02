import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from '../globals/style';

const HomeHeadNav = () => {
  return (
    <View style={styles.container}>
      <Fontisto name="nav-icon-list-a" size={24} color="black" style={styles.myicon} />
      <View style={styles.containerin}>
        <Text style={styles.mytext}>FoodCaRt
          <MaterialCommunityIcons name="food-turkey" size={24} color="black" style={styles.myicon}/>
        </Text>
      </View>
      
      <FontAwesome name="user-circle" size={24} color="black" style={styles.myicon}/>
      {/* <Text>HomeHeadNav</Text> */}
    </View>
  )
}

export default HomeHeadNav

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.head,
    elevation: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  containerin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  myicon: {
    color: colors.icon,
  },
  mytext: {
    color: colors.text1,
    fontSize: 24,
  },

})