// Category.js
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Category = ({ name }) => {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <Text style={styles.menuItemText}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItemText: {
    color: '#000',
    fontSize: 15,
  },
});

export default Category;