import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export function BotonGrad({textButtonParam, containerStyle, onPress}) {
    
    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
        <LinearGradient
            colors={['#a5a5f4', '#00d4ff']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}     
            style={styles.boton}>
            <Text style={styles.text}>{String(textButtonParam)}</Text>
        </LinearGradient>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    width: 200,
    marginTop: 40

    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
    boton: {
        width: "80%",
        height: 50,
        borderRadius: 25,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    

});

export default BotonGrad;
