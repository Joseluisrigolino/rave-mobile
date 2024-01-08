import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { BotonGrad}  from '../../components/Boton.js';
import { MailInput } from '../../components/MailInput.js';



export default function RegisterAccountScreen() {
  const textButton = "Enviar mail";
    return (
      <View style={styles.container}>
      <Text style={styles.titulo}>Restablezcamos</Text>
      <Text style={styles.subTitulo}>Escribi tu mail donde sera enviado un codigo de confirmacion</Text>
      <MailInput></MailInput>
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
      fontSize: 15,
      color: 'gray',
    },
    textInput: {
      borderWidth: 1,
      paddingStart: 30,
      borderColor: "gray",
      padding: 10,
      width: "80%",
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: "#fff",
    },
    olvidasteContrasenia: {
      fontSize: 14,
      color: "gray",
      marginTop: 20
    },
    
    
  });