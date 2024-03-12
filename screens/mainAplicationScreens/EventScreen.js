import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EventScreen = () => {
    const [selectedTicket, setSelectedTicket] = useState("1");
  
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.eventName}>Nombre del evento</Text>
            
            <View style={styles.imageContainer}>
                <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.eventImage} />
            </View>
            
            <Text style={styles.eventDescription}>Descripción del evento</Text>
            
            <View style={styles.detailsContainer}>
                <Text style={styles.eventTime}>Horario del evento: 23:50hs a 07:00hs</Text>
                <Text style={styles.eventLocation}>Av. Cnel. Niceto Vega 6599 - Capital Federal</Text>
                
                <TouchableOpacity style={styles.directionButton}>
                    <Text style={styles.directionButtonText}>Cómo llegar</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.favoriteButton}>
                    <Icon name="heart-o" size={20} color="#000" />
                    <Text style={styles.favoriteButtonText}>Agregar a Favoritos</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.ticketContainer}>
                <Text style={styles.ticketTitle}>Entrada General</Text>
                <Text style={styles.ticketPrice}>$2000</Text>
                <Picker
                    selectedValue={selectedTicket}
                    style={styles.ticketPicker}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedTicket(itemValue)
                    }>
                    <Picker.Item label="0" value="0" />
                    <Picker.Item label="1" value="1" />
                    {/* ... more items ... */}
                </Picker>
            </View>
            
            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>COMPRAR</Text>
            </TouchableOpacity>
            
            {/* Similar approach for the DJ tracks and reviews sections */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    eventName: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
    },
    imageContainer: {
        alignItems: 'center',
        marginVertical: 10,
    },
    eventImage: {
        width: '90%',
        height: 200,
    },
    eventDescription: {
        margin: 10,
    },
    detailsContainer: {
        margin: 10,
    },
    eventTime: {
        fontSize: 16,
    },
    eventLocation: {
        fontSize: 16,
        marginBottom: 10,
    },
    directionButton: {
        // Style as a button
    },
    directionButtonText: {
        // Text style
    },
    favoriteButton: {
        // Style as a button
    },
    favoriteButtonText: {
        // Text style
    },
    ticketContainer: {
        // Style the ticket section
    },
    ticketTitle: {
        // Title style
    },
    ticketPrice: {
        // Price style
    },
    ticketPicker: {
        // Picker style
    },
    buyButton: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
    },
    buyButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    // Add styles for the DJ tracks and reviews sections
});

export default EventScreen;
