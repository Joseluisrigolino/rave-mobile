// HomeScreen.js
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BotonGrad}  from '../components/Boton.js';
import { MailInput } from '../components/MailInput.js';
import { PassInput } from '../components/PassInput.js';

export function HomeScreen() {
  const textButton = "Ingresar";
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido a Rave</Text>
      <Text style={styles.subTitulo}>Ingresa a tu cuenta</Text>
      <MailInput />
      <PassInput />
      <Text style={styles.olvidasteContrasenia}>Olvidaste tu contraseña?</Text>
      <BotonGrad textButtonParam={textButton}/>
      <Text style={styles.olvidasteContrasenia}>No tenes cuenta?</Text>
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