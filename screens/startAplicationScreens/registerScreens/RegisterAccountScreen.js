/*

Pantalla para registrarse dentro de la app

*/

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { BotonGrad}  from '../../../components/Boton.js';
import { BotonGradGoogle}  from '../../../components/BotonGoogle.js';
import { MailInput } from '../../../components/MailInput.js';
import { PassInput } from '../../../components/PassInput.js';
//navegacion
import { useNavigation } from '@react-navigation/native';

export default function RegisterAccountScreen() {
  const textButton = "Registrarse";
  const textButtonGoogle = "Registrarse con google";
  const navigation = useNavigation(); // Obtiene el objeto de navegación
  //definir navegacion
  const toRegisterAccountCode = () => {
    navigation.navigate('RegisterAccountCodeScreen'); // Navega a la pantalla "RegisterAccountScreen"
  };

  
    return (
      <View style={styles.container}>
      <Text style={styles.titulo}>Registremonos</Text>
      <Text style={styles.subTitulo}>Registra tus datos</Text>
      <MailInput></MailInput>
      <PassInput></PassInput>
      <BotonGrad onPress={toRegisterAccountCode} textButtonParam={textButton}></BotonGrad>
      <BotonGradGoogle textButtonParam={textButtonGoogle} />
      <Text style={styles.olvidasteContrasenia}>Ingresa como invitado </Text>
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
      fontSize: 20,
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