import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import swiper from 'react-native-swiper'
import Swiper from 'react-native-swiper'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { colors } from '../globals/style'


const OfferSlider = () => {
  return (
    <View>
      
      <View style={styles.OfferSlider}>
        <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true}
          dotColor={colors.text2} activeDotColor={colors.text1}
          nextButton={<Text style={styles.buttonText}>›</Text>}
          prevButton={<Text style={styles.buttonText}>‹</Text>}
        >
          <View style={styles.slider}>
            <Image source={require('../../assets/OfferSliderImage/img1.jpeg')} style={styles.Image}/>
          </View>

          <View style={styles.slider}>
            <Image source={require('../../assets/OfferSliderImage/pic4.png')} style={styles.Image}/>
          </View>

          <View style={styles.slider}>
            <Image source={require('../../assets/OfferSliderImage/pic5.jpg')} style={styles.Image}/>
          </View>

          <View style={styles.slider}>
            <Image source={require('../../assets/OfferSliderImage/pic6.png')} style={styles.Image}/>
          </View>

          <View style={styles.slider}>
            <Image source={require('../../assets/OfferSliderImage/pic7.jpg')} style={styles.Image}/>
          </View>

          <View style={styles.slider}>
            <Image source={require('../../assets/OfferSliderImage/pic8.jpg')} style={styles.Image}/>
          </View>

        </Swiper>
      </View>
    </View>
  )
}

export default OfferSlider

const styles = StyleSheet.create({
  OfferSlider: {
    width: '100%',
    height: 200,
    backgroundColor: colors.col1,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  slider: {
    width: '100%',
    height: 200,
    backgroundColor: colors.col1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  buttonText: {
    color: colors.text1,
    fontSize: 40,
    fontWeight: '300',
    backgroundColor: 'white',
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: 'center',
    lineHeight: 39,
}
})