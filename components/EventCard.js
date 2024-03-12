import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export function EventCard({ eventName, eventDate, imageUrl }) {
    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <View style={styles.detailsContainer}>
                <Text style={styles.eventName}>{eventName}</Text>
                <Text style={styles.eventDate}>{eventDate}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'black', // Fondo oscuro
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    detailsContainer: {
        alignItems: 'center',
    },
    eventName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    eventDate: {
        color: '#fff',
        fontSize: 16,
    },
});

export default EventCard;