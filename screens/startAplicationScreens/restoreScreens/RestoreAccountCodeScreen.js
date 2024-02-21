/*

Pantalla para recuperar contraseña dentro de la app

*/


import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { BotonGrad}  from '../../../components/Boton.js';
import { CodeRestInput } from '../../../components/CodeRestInput.js';
import { useNavigation } from '@react-navigation/native';


export default function RegisterAccountCodeScreen() {
  const textButton = "Restablecer";
  const navigation = useNavigation(); // Obtiene el objeto de navegación
  

  const toRestoreAccountCodePos = () => {
    navigation.navigate('RestoreAccountCodePosScreen'); // Navega a la pantalla "RegisterAccountScreen"
  };
    return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Ingrese Codigo</Text>
      <Text style={styles.subTitulo}>Recupera tus datos</Text>
      <CodeRestInput></CodeRestInput>
      <BotonGrad onPress={toRestoreAccountCodePos} textButtonParam={textButton}></BotonGrad>
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