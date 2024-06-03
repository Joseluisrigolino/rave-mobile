import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

const PurchasedEvent = () => {
  const initialEvents = [
    { id: 1, nombre: 'Evento 1', fecha: '2024-05-01', imagen: 'https://picsum.photos/200' },
    { id: 2, nombre: 'Evento 2', fecha: '2024-05-02', imagen: 'https://picsum.photos/220' },
    { id: 3, nombre: 'Evento 3', fecha: '2024-05-03', imagen: 'https://picsum.photos/230' },
    { id: 4, nombre: 'Evento 4', fecha: '2024-05-04', imagen: 'https://picsum.photos/240' },
    { id: 5, nombre: 'Evento 5', fecha: '2024-06-04', imagen: 'https://picsum.photos/250' },
    { id: 6, nombre: 'Evento 6', fecha: '2024-06-05', imagen: 'https://picsum.photos/260' },
    { id: 7, nombre: 'Evento 7', fecha: '2024-06-06', imagen: 'https://picsum.photos/270' },
    { id: 8, nombre: 'Evento 8', fecha: '2024-07-07', imagen: 'https://picsum.photos/280' },
    { id: 9, nombre: 'Evento 9', fecha: '2024-07-08', imagen: 'https://picsum.photos/290' },
    { id: 10, nombre: 'Evento 10', fecha: '2024-08-09', imagen: 'https://picsum.photos/201' },
  ];

  const [events, setEvents] = useState([]);

  useEffect(() => {
    const now = new Date().getTime();
    const sortedEvents = initialEvents.sort((a, b) => {
      const timeA = new Date(a.fecha).getTime();
      const timeB = new Date(b.fecha).getTime();
      return (timeA > now ? timeA : now + timeA) - (timeB > now ? timeB : now + timeB);
    });
    setEvents(sortedEvents);
  }, []);

  const isEventPast = date => new Date(date).getTime() < new Date().getTime();

  return (
    <View style={styles.mainContainer}>
      <Title />
      <ScrollView style={styles.container}>
        <View style={styles.eventList}>
          {events.map((evento) => (
            <View key={evento.id} style={styles.card}>
              <Image source={{ uri: evento.imagen }} style={isEventPast(evento.fecha) ? styles.imagePast : styles.image} />
              <Text style={styles.eventName}>{evento.nombre}</Text>
              <Text style={styles.eventDate}>{evento.fecha}</Text>
              {isEventPast(evento.fecha) && (
                <Text style={styles.finalizedText}>Finalizado</Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  eventList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    width: '48%',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    padding: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  imagePast: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    opacity: 0.5,
    overlayColor: 'black',
  },
  eventName: {
    fontSize: 16,
    paddingVertical: 5,
  },
  eventDate: {
    fontSize: 14,
    color: 'grey',
    paddingBottom: 5,
  },
  finalizedText: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    color: 'red',
    textDecorationLine: 'line-through',
  },
});

export default PurchasedEvent;
