/*

Pantalla para recuperar contraseña dentro de la app

*/


import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { BotonGrad}  from '../../components/Boton.js';
import { CodeRestInput } from '../../components/CodeRestInput.js';



export default function RegisterAccountCodeScreen() {
  const textButton = "Enviar mail";
    return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ingrese Codigo</Text>
      <Text style={styles.subTitulo}>Recupera tus datos</Text>
      <CodeRestInput></CodeRestInput>
      <BotonGrad textButtonParam={textButton}></BotonGrad>
      <StatusBar style="auto" />
    </View>
    );

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulo: {
      fontSize: 42,
      color: '#34434D',
      fontWeight: "bold",
  
    },
    subTitulo: { 
      marginTop: 3,
      fontSize: 15,
      color: 'gray',
    },  
    
    
    
  });