import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

const EventFavScreen = () => {
  const initialEvents = [
    { id: 1, nombre: 'Evento 1', fecha: '2024-05-01', imagen: 'https://picsum.photos/200', liked: true },
    { id: 2, nombre: 'Evento 2', fecha: '2024-05-02', imagen: 'https://picsum.photos/220', liked: true },
    { id: 3, nombre: 'Evento 3', fecha: '2024-05-03', imagen: 'https://picsum.photos/230', liked: true },
    { id: 4, nombre: 'Evento 4', fecha: '2024-05-04', imagen: 'https://picsum.photos/240', liked: true },
    { id: 5, nombre: 'Evento 5', fecha: '2024-05-04', imagen: 'https://picsum.photos/250', liked: true },
    { id: 6, nombre: 'Evento 6', fecha: '2024-05-04', imagen: 'https://picsum.photos/260', liked: true },
    { id: 7, nombre: 'Evento 7', fecha: '2024-05-04', imagen: 'https://picsum.photos/270', liked: true },
    { id: 8, nombre: 'Evento 8', fecha: '2024-05-04', imagen: 'https://picsum.photos/280', liked: true },
    { id: 9, nombre: 'Evento 9', fecha: '2024-05-04', imagen: 'https://picsum.photos/290', liked: true },
    { id: 10, nombre: 'Evento 10', fecha: '2024-05-04', imagen: 'https://picsum.photos/201', liked: true },

  ];

  // Estado para manejar los eventos que están marcados como favoritos
  const [events, setEvents] = useState(initialEvents);

  const handleLikePress = (eventId) => {
    const updatedEvents = events.map(event => {
      if (event.id === eventId) {
        return { ...event, liked: !event.liked };  // Cambia el estado de 'liked'
      }
      return event;
    }).filter(event => event.liked);  // Filtra para mantener solo los eventos que siguen siendo favoritos

    setEvents(updatedEvents);
  };

  return (
    <View style={styles.mainContainer}>
      <Title />
      <ScrollView style={styles.container}>
        <View style={styles.eventList}>
          {events.map((evento) => (
            <View key={evento.id} style={styles.card}>
              <Image source={{ uri: evento.imagen }} style={styles.image} />
              <Text style={styles.eventName}>{evento.nombre}</Text>
              <Text style={styles.eventDate}>{evento.fecha}</Text>
              <TouchableOpacity onPress={() => handleLikePress(evento.id)} style={styles.likeButton}>
                <Icon name={evento.liked ? "heart" : "heart-o"} size={24} color='red' />
              </TouchableOpacity>
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
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
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
  likeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default EventFavScreen;
