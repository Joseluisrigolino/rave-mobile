import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import BotonGrad from '../rave-mobile/components/Boton.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bienvenido a Rave</Text>
      <Text style={styles.subTitulo}>Ingresa a tu cuenta</Text>
      <TextInput 
      placeholder='aaa@email.com' 
      style={styles.textInput}>

      </TextInput>
      <TextInput 
      placeholder='contraseña'
      style={styles.textInput}>
      
      </TextInput>
      <Text style={styles.olvidasteContrasenia}>Olvidaste tu contraseña?</Text>
      <BotonGrad></BotonGrad>
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
