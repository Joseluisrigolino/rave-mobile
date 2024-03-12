// EventCard.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const EventCard = ({ eventName, eventDate, eventDescription, imageUrl, liked, onLikePress }) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.likeButton} onPress={onLikePress}>
        <Icon2 name={liked ? "heart" : "heart-o"} size={24} color={liked ? "red" : "grey"} />
      </TouchableOpacity>
      <Image source={{ uri: imageUrl }} style={styles.eventImage} />
      <Text style={styles.eventName}>{eventName}</Text>
      <View style={styles.dateContainer}>
        <Text style={styles.eventDate}>{eventDate}</Text>
      </View>
      <Text style={styles.eventDescription}>{eventDescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  eventName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  eventDate: {
    fontSize: 18,
  },
  eventDescription: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5,
  },
  likeButton: {
    position: 'absolute',
    right: 10,
    top: 10,
    padding: 10,
  },
});

export default EventCard;