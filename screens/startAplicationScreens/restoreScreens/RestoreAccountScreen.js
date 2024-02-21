/*

Pantalla para recuperar contraseña dentro de la app

*/


import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { BotonGrad}  from '../../../components/Boton.js';
import { MailInput } from '../../../components/MailInput.js';
import { useNavigation } from '@react-navigation/native';


export default function RegisterAccountScreen() {
  const textButton = "Enviar mail";
  const navigation = useNavigation(); // Obtiene el objeto de navegación
    
  const toRestoreAccountCodeScreen = () => {
    navigation.navigate('RestoreAccountCodeScreen'); // Navega a la pantalla "RegisterAccountScreen"
  };
  
  return (
      <View style={styles.container}>
      <Text style={styles.titulo}>Restablezcamos</Text>
      <Text style={styles.subTitulo}>Escribi tu mail donde sera enviado un codigo de confirmacion</Text>
      <MailInput></MailInput>
      <BotonGrad onPress={toRestoreAccountCodeScreen} textButtonParam={textButton}></BotonGrad>
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