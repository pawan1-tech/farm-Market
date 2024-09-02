import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { colors } from '../../globals/style';


const ListScreen = ({ navigation, route }) => {
  const [selectedCategory, setSelectedCategory] = useState(route.params.selectedCategory);
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = () => {
    // Replace this with your API call to fetch listings based on the selected category
    const listingsData = [
      {
        id: 1,
        name: 'Listing 1',
        description: 'This is listing 1',
        price: 10.99,
        // image: require('../../assets/listing1.jpg'),
      },
      {
        id: 2,
        name: 'Listing 2',
        description: 'This is listing 2',
        price: 9.99,
        // image: require('../../assets/listing2.jpg'),
      },
      {
        id: 3,
        name: 'Listing 3',
        description: 'This is listing 3',
        price: 12.99,
        // image: require('../../assets/listing3.jpg'),
      },
    ];
    setListings(listingsData);
  };

  const handleListingPress = (listing) => {
    navigation.navigate('ListingDetail', { listing });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.head}>Listings</Text>
      <FlatList
        data={listings}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleListingPress(item)}>
            <View style={styles.listing}>
              <Image source={item.image} style={styles.listingImage} />
              <View style={styles.listingInfo}>
                <Text style={styles.listingName}>{item.name}</Text>
                <Text style={styles.listingDescription}>{item.description}</Text>
                <Text style={styles.listingPrice}>${item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.col1,
    width: '90%',
    height: '100%',
    alignItems: 'center',
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
  listing: {
    backgroundColor: colors.col1,
    elevation: 20,
    margin: 10,
    padding: 10,
    height: 150,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  listingImage: {
    height: 100,
    width: 100,
    backgroundColor: colors.col1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listingInfo: {
    height: 100,
    width: '60%',
    backgroundColor: colors.col1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listingName: {
    color: colors.text1,
    fontSize: 18,
    fontWeight: '300',
    margin: 5,
  },
  listingDescription: {
    color: colors.text2,
    fontSize: 14,
    fontWeight: '300',
    margin: 5,
  },
  listingPrice: {
    color: colors.text1,
    fontSize: 18,
    fontWeight: '300',
    margin: 5,
  },
});

export default ListScreen;