import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, {useState} from 'react'
import { inputNumberOnly } from "../utils/InputNumberOnly";


export function CodeRestInput() {

  const [codeInput, setCodeInput] = useState('');

  const handleInputChange = (text) => {
    const numericValue = inputNumberOnly(text);
    setCodeInput(numericValue)
  };
  return (
    <View>
        <TextInput 
        placeholder='Codigo enviado al mail' 
        style={styles.textInput}
        keyboardType='numeric'
        value={codeInput}
        onChangeText={handleInputChange}
        >
        
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

export default CodeRestInput;
