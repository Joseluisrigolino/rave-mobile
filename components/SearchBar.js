// SearchBar.js
import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = ({ placeholder }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder={placeholder}
        style={styles.searchInput}
      />
      <TouchableOpacity style={styles.searchIcon}>
        <Icon name="search" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    color: '#000',
  },
  searchIcon: {
    padding: 5,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
  },
});

export default SearchBar;