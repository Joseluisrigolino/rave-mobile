import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Title from '../../../components/Title';
import Footer from '../../../components/Footer';

const PurchasedEventDescription = () => {
  // Suponiendo que tienes acceso a algún prop que te da la fecha del evento
  // Esta debería ser una prop real pasada al componente
  const eventDate = '2024-07-09T23:50:00';
  const currentDate = new Date();
  const eventDateTime = new Date(eventDate);

  const [eventPassed, setEventPassed] = useState(currentDate > eventDateTime);

  return (
    <View style={styles.container}>
      <Title text="Entrada a: Nombre del evento" />
      <ScrollView style={styles.scrollContainer}>
        {eventPassed ? (
          <View style={styles.pastEventContainer}>
            <Text style={styles.eventFinalizado}>Evento finalizado</Text>
            <Text style={styles.ticketText}>Ticket: Entrada General</Text>
            <Text style={styles.ticketText}>Valor: $3000</Text>
            <Text style={styles.ticketText}>{eventDate}</Text>
            <Text style={styles.ticketText}>23:50hs a 07:00hs</Text>
            <Text style={styles.ticketText}>Av. Cnel. Niceto Vega 6599 - Capital Federal</Text>
            <TextInput 
              style={styles.commentInput}
              multiline
              placeholder="Comenta que te pareció la fiesta"
            />
          </View>
        ) : (
          <View style={styles.qrSection}>
            <Image source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example' }} style={styles.qrImage} />
            <View style={styles.ticketInfo}>
              <Text style={styles.ticketText}>Ticket: Entrada General</Text>
              <Text style={styles.ticketText}>Valor: $3000</Text>
              <Text style={styles.ticketText}>09/12/2024</Text>
              <Text style={styles.ticketText}>23:50hs a 07:00hs</Text>
              <Text style={styles.ticketText}>Av. Cnel. Niceto Vega 6599 - Capital Federal</Text>
            </View>
          </View>
        )}
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('http://example.com')}>
          <Text style={styles.buttonText}>Descargar entrada</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://maps.google.com')}>
          <Text style={styles.buttonText}>Cómo llegar</Text>
        </TouchableOpacity>
        <Text style={styles.description}>Descripción del evento</Text>
        <Image source={{ uri: 'https://picsum.photos/500' }} style={styles.eventImage} />
        <Text style={styles.disclaimer}>*Una vez finalizado el evento, podrás dejar tu reseña :)</Text>
        <Text style={styles.disclaimer}>[Sólo aplica para eventos de boliches, no se pueden dejar reseñas de visitas puntuales de djs.]</Text>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 20,
  },
  qrSection: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  qrImage: {
    width: 150,
    height: 150,
    marginRight: 20,
  },
  ticketInfo: {
    justifyContent: 'space-around',
  },
  ticketText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000',
    padding: 10,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
    marginTop: 20,
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  disclaimer: {
    fontSize: 12,
    color: 'grey',
    marginBottom: 5,
  },
  pastEventContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventFinalizado: {
    fontSize: 20,
    color: 'red',
    marginBottom: 10,
  },
  commentInput: {
    fontSize: 16,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    minHeight: 100,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
});

export default PurchasedEventDescription;
