import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../globals/style';

const StorySectionScreen = () => {
  const stories = [
    { id: 1, title: 'Story 1', image: require('../../assets/story/story1.jpg') },
    { id: 2, title: 'Story 2', image: require('../../assets/story/story2.jpg') },
    { id: 3, title: 'Story 3', image: require('../../assets/story/story3.jpg') },
    { id: 4, title: 'Story 4', image: require('../../assets/story/story4.jpg') },
    { id: 5, title: 'Story 5', image: require('../../assets/story/story5.jpeg') },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.storyItem}>
        <Image source={item.image} style={styles.storyImage} />
        {/* <View style={styles.storyCircle}>
          <AntDesign name="plus" size={30} color="#fff" />
        </View> */}
        {/* <View style={styles.storyText}>
          <Text style={styles.storyTitle}>{item.title}</Text>
        </View> */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true} // Add this prop to make the list horizontal
        showsHorizontalScrollIndicator={true} // Add this prop to hide the horizontal scrollbar
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    // backgroundColor: colors.col1,
    // backgroundColor: colors.bgcol,
    width: '100%',
    // height: 170,
    // alignItems: 'center',
    // elevation: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  storyItem: {
    // marginRight: 16, // Add some margin between items
    width: 100, // Set a fixed width for each item
    // height: 120, // Set a fixed height for each item
  },
  storyImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    padding: 4,
    borderColor: '#FF69B4', // Change the border color to pink
    borderWidth: 2,
  },
  storyCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    borderWidth: 1,
    // alignItems: 'center',
    elevation: 5,
  },
  storyText: {
    marginTop: 8,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StorySectionScreen;