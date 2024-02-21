import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function BotonGradGoogle({textButtonParam, containerStyle, onPress}) {
    console.log("Valor de textButtonParam:", textButtonParam); // Agrega esta línea
    return (
        <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
        <LinearGradient
            colors={['#a5a5f4', '#00d4ff']}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}     
            style={styles.boton}>
            <Text style={styles.text}><Ionicons name="logo-google" size={15} color="black" /> {String(textButtonParam)}</Text>
        </LinearGradient>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
    width: 240,
    marginTop: 10

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

export default BotonGradGoogle;
