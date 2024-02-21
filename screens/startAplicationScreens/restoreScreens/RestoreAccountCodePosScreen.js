/*

Pantalla para cambiar contraseña dentro de la app

*/


import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { BotonGrad}  from '../../../components/Boton.js';
import { CodeRestInput } from '../../../components/CodeRestInput.js';
import PassInput from '../../../components/PassInput.js';
import { useNavigation } from '@react-navigation/native';



export default function RegisterAccountCodeScreen() {
  const textButton = "Guardar";
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  const toLogin = () => {
    navigation.navigate('Login'); // Navega a la pantalla "RegisterAccountScreen"
  };
    return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ingrese Nueva contraseña</Text>
      <Text style={styles.subTitulo}>No puede ser una contraseña anteriormente usada</Text>
      <PassInput/>
      <BotonGrad onPress={toLogin} textButtonParam={textButton}></BotonGrad>
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