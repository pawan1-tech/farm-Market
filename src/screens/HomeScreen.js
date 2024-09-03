import React, { useState } from 'react';
import { useRoute, useNavigation  } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, StatusBar, Animated } from 'react-native';
import Octicons from '@expo/vector-icons/Octicons';
import { colors } from '../globals/style';
import BottomTabNavigator from '../components/BottomTabNavigator';
import Categories from '../components/Categories';
import FloatingChat from '../components/FloatingChat';

import StorySectionScreen from '../components/StorySectionScreen';
import CategoryList from '../components/categorylist';

const HomeScreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  const handleSearchBlur = () => {
    setIsSearching(false);
  };


  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.searchbox}>
        <Octicons name="search" size={24} color="black" style={styles.searchicon} />
        <TextInput
          placeholder='Search'
          style={styles.input}
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
      </View>
      <StorySectionScreen />
      {isSearching ? (
        <View style={styles.searchResults}>
          {/* Display search results here */}
          <Text>Search results for: {searchValue}</Text>
        </View>
      ) : (
        <Categories isSearching={isSearching} />
      )}
      {/* <ListScreen route={route} navigation={navigation} /> */}

      <CategoryList />

      

      <FloatingChat />
      
      <View style={[styles.bottomTab, isSearching ? styles.blur : null]}>
        <BottomTabNavigator style={isSearching ? styles.blur : null} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.col1,
    alignItems: 'center',
    width: '100%',
  },
  searchbox: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor: colors.col1,
    borderRadius: 30,
    alignItems: 'center',
    padding: 10,
    margin: 20,
    elevation: 10,
  },
  input: {
    marginLeft: 10,
    width: '80%', // changed from '90%' to '80%' to avoid overlapping with search icon
    fontSize: 18,
    color: colors.text1,
  },
  searchicon: {
    color: colors.text1,
  },
  bottomTab: {
    position: 'absolute',
    // margin: 20, // increased padding
    // paddingBottom: '10%',
    bottom: 0,
    left: 0,
    right: 0,
    // height: 80,
    backgroundColor: colors.col2, 
    borderTopWidth: 1, 
    borderTopColor: colors.text1, 
  },
  blur: {
    opacity: 0, // changed from 0 to 0.5 to make it semi-transparent
  },
  searchResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;