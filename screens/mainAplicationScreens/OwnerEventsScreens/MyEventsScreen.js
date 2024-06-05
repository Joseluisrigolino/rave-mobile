import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Title from '../../../components/Title';
import Footer from '../../../components/Footer';

const MyEventsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const events = [
    { id: 1, nombre: 'Evento 1', fecha: '2024-05-01', imagen: 'https://picsum.photos/200' },
    { id: 2, nombre: 'Evento 2', fecha: '2024-05-02', imagen: 'https://picsum.photos/220' },
    // Añade más eventos según necesites
  ];

  // Filtrar eventos basado en la búsqueda
  const filteredEvents = events.filter(event => 
    event.nombre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.mainContainer}>
      <Title text="Mis eventos:" />
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar eventos"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <ScrollView style={styles.container}>
        {filteredEvents.map((evento) => (
          <View key={evento.id} style={styles.card}>
            <Image source={{ uri: evento.imagen }} style={styles.image} />
            <View style={styles.eventDetails}>
              <Text style={styles.eventDate}>{evento.fecha}</Text>
              <Text style={styles.eventName}>{evento.nombre}</Text>
              <TouchableOpacity style={styles.entradasVendidasButton} onPress={() => console.log('Ver entradas vendidas')}>
                <Text style={styles.entradasVendidasText}>Entradas vendidas</Text>
              </TouchableOpacity>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.buttonText}>Modificar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.buttonText}>Cancelar evento</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  searchBar: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 10,
  },
  eventDetails: {
    flex: 1,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: 'grey',
  },
  entradasVendidasButton: {
    backgroundColor: '#007BFF', // Blue color for the button
    padding: 8,
    borderRadius: 5,
    marginBottom: 5,
  },
  entradasVendidasText: {
    color: '#fff',
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  actionButton: {
    backgroundColor: '#000',
    padding: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default MyEventsScreen;
