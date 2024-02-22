import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react'


export function TextInputName(textParam) {

  const placeholderText = typeof textParam === 'object' ? textParam.name : String(textParam);
  console.log
  return (
    <View>
        <TextInput 
        placeholder={placeholderText}
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
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: "#fff",
        },
    
        
});

export default TextInputName;