import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { colors } from '../globals/style';

const CategoryList = ({ navigation }) => {
  const categories = [
    {
      id: 1,
      name: 'Seeds',
      description: 'High-quality seeds for your garden',
      price: 109,
      location: 'Rampur',
      time: 'Posted 2 hours ago',
      image: require('../../assets/story/story1.jpg'),
    },
    {
      id: 2,
      name: 'Products',
      description: 'Best products for your garden',
      price: 209,
      location: 'Naturanagar',
      time: 'Posted 1 hour ago',
      image: require('../../assets/story/story2.jpg'),
    },
    {
      id: 3,
      name: 'Fertilizers',
      description: 'Organic fertilizers for your garden',
      price: 159,
      location: 'Furfurinagar',
      time: 'Posted 3 hours ago',
      image: require('../../assets/story/story3.jpg'),
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {categories.map((category) => (
        <View style={styles.box} key={category.id}>
          <Image source={category.image} style={styles.image} />
          <View style={styles.infoBox}>
            <Text style={styles.name}>{category.name}</Text>
            <Text style={styles.description}>{category.description}</Text>
            <Text style={styles.price}>Rs.{category.price}</Text>
            <Text style={styles.location}>{category.location}</Text>
            <Text style={styles.time}>{category.time}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgcol,
    width: '100%',
    height: '100%',
    padding: 10,
  },
  box: {
    backgroundColor: colors.col1,
    elevation: 20,
    margin: 10,
    padding: 10,
    height: 300, // Increased height to fit the content
    width: '90%', // Decreased width to prevent overlapping
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'column',
    marginBottom: 20, // Added margin bottom to prevent overlapping
  },
  image: {
    height: 150,
    width: '90%', // Decreased width to prevent image from coming out of the card
    borderRadius: 10,
  },
  infoBox: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text1,
  },
  description: {
    fontSize: 14,
    color: colors.text2,
  },
  price: {
    fontSize: 16,
    color: colors.text3,
  },
  location: {
    fontSize: 14,
    color: colors.text2,
  },
  time: {
    fontSize: 12,
    color: colors.text2,
  },
});