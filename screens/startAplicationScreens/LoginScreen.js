/*

Pantalla de inicio en la app

*/
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BotonGrad}  from '../../components/Boton';
import { BotonGradGoogle}  from '../../components/BotonGoogle';
import { MailInput } from '../../components/MailInput';
import { PassInput } from '../../components/PassInput';
//navegacion
import { useNavigation } from '@react-navigation/native';



export default function LoginScreen() {
  const textButton = "Ingresar";
  const googleButton = "Ingresar con google";
  const navigation = useNavigation(); // Obtiene el objeto de navegación
  //definir navegacion
  const toRegisterAccount = () => {
    navigation.navigate('RegisterAccountScreen'); // Esta funcion navega a la pantalla "RegisterAccountScreen"
  };

  const toRestoreAccountScreen = () => {
    navigation.navigate('RestoreAccountScreen'); // Esta funcion navega a la pantalla "RestoreAccountScreen"
  };

  /*const toIndex = () => {
    navigation.navigate('Index'); // Navega a la pantalla "Index"
  };
  */

  return (
    <View style={styles.container}>
            
      <Text style={styles.titulo}>Bienvenido a Rave</Text>
      <Text style={styles.subTitulo}>Ingresa a tu cuenta</Text>
      <MailInput />
      <PassInput />
      <Text onPress={toRestoreAccountScreen} style={styles.olvidasteContrasenia}>Olvidaste tu contraseña?</Text>
      <BotonGrad textButtonParam={textButton}/>
      <BotonGradGoogle textButtonParam={googleButton}/>
      <Text onPress={toRegisterAccount} style={styles.olvidasteContrasenia}>No tenes cuenta?</Text>
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
  olvidasteContrasenia: {
    fontSize: 14,
    color: "gray",
    marginTop: 20
  },
});

