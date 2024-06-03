import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Footer from '../../components/Footer';
import Title from '../../components/Title';

const BuyEventScreen = () => {
  const [buyerInfo, setBuyerInfo] = useState({
    firstName: '',
    lastName: '',
    idType: 'DNI',
    idNumber: '',
    email: '',
    confirmEmail: '',
    phone: ''
  });

  const handleInputChange = (name, value) => {
    setBuyerInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handlePurchase = () => {
    console.log('Purchase details:', buyerInfo);
    // Logic for handling the purchase goes here
  };

  return (
    <ScrollView style={styles.container}>
      <Title />
      <View style={styles.productDetailContainer}>
        <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.eventImage} />
        <Text style={styles.eventTitle}>Entrada general para [nombre del evento]</Text>
        <Text style={styles.eventPrice}>Cantidad: 1 - Valor: $2000,00 - Subtotal: $2000,00</Text>
      </View>
      <View style={styles.buyerInfoContainer}>
        <TextInput
          style={styles.input}
          value={buyerInfo.firstName}
          onChangeText={text => handleInputChange('firstName', text)}
          placeholder="Nombre"
        />
        <TextInput
          style={styles.input}
          value={buyerInfo.lastName}
          onChangeText={text => handleInputChange('lastName', text)}
          placeholder="Apellido"
        />
        <Picker
          selectedValue={buyerInfo.idType}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            handleInputChange('idType', itemValue)
          }>
          <Picker.Item label="DNI" value="DNI" />
          <Picker.Item label="CUIL" value="CUIL" />
        </Picker>
        <TextInput
          style={styles.input}
          value={buyerInfo.idNumber}
          onChangeText={text => handleInputChange('idNumber', text)}
          placeholder="Número de identificación"
        />
        <TextInput
          style={styles.input}
          value={buyerInfo.email}
          onChangeText={text => handleInputChange('email', text)}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          value={buyerInfo.confirmEmail}
          onChangeText={text => handleInputChange('confirmEmail', text)}
          placeholder="Confirmación de Email"
        />
        <TextInput
          style={styles.input}
          value={buyerInfo.phone}
          onChangeText={text => handleInputChange('phone', text)}
          placeholder="Teléfono"
        />
        <Text style={styles.totalContainer}>
          Subtotal: $2000,00{'\n'}
          Cargo por servicio: $320,00{'\n'}
          Total: $2320,00
        </Text>
        <Text style={styles.disclaimer}>
          * Al hacer click en comprar, te redireccionaremos a MercadoPago para que puedas realizar el pago y finalizar la compra.
        </Text>
        <Button title="COMPRAR" onPress={handlePurchase} color="#000" />
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  productDetailContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  eventImage: {
    width: '100%', // Adjust as necessary
    height: 200,  // Adjust height as necessary
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  eventPrice: {
    fontSize: 14
  },
  buyerInfoContainer: {
    padding: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  },
  picker: {
    height: 50,
    width: '100%',
    color: 'black'
  },
  totalContainer: {
    marginVertical: 20,
    fontSize: 16
  },
  disclaimer: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 10
  }
});

export default BuyEventScreen;
