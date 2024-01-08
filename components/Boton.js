import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default function BotonGrad() {

    return (
        <TouchableOpacity style={styles.container}>
        <LinearGradient
            // Button Linear Gradient
            colors={['#a5a5f4', '#00d4ff']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}     
            style={styles.boton}>
            <Text style={styles.text}>Ingresar</Text>
        </LinearGradient>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
    alignItems: 'center',
      width: 200,
      marginTop: 60

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