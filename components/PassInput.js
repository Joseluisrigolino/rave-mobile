import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react'


export function PassInput() {
  return (
    <View>
        <TextInput 
      placeholder='contraseña'
      style={styles.textInput}>
      </TextInput>
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
        backgroundColor: "#fff",
        },
    
        
});

export default PassInput;
