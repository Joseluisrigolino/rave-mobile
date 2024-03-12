import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react'


export function SearchBar() {
  return (
    <View>
    <TextInput 
      placeholder='Nombre del evento'
      style={styles.textInput}>
    </TextInput>
    <TouchableOpacity></TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        paddingStart: 25,
        borderColor: "gray",
        padding: 10,
        width: 280,
        marginTop: 13,
        borderRadius: 30,
        backgroundColor: "#e6e6e6",
        },
    buttonSearch: {
        backgroundColor: "#000000",
        width: 280,
        height: 30,
    }
        
});

export default SearchBar;
