import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EventScreen = () => {
    const [selectedQuantity, setSelectedQuantity] = useState('1');
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => setIsFavorite(!isFavorite);

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: 'https://picsum.photos/500' }} style={styles.eventImage} />
            <View style={styles.detailsContainer}>
                <Text style={styles.eventName}>Fiesta de mi amigo</Text>
                <View style={styles.priceRatingContainer}>
                    <Text style={styles.eventPrice}>$2500</Text>
                    <Icon name="star" size={20} color="yellow" />
                    <Text style={styles.eventRating}>(4.9)</Text>
                </View>
                <TouchableOpacity style={styles.favoriteButton} onPress={toggleFavorite}>
                    <Icon name={isFavorite ? "heart" : "heart-o"} size={24} color={isFavorite ? "red" : "black"} />
                </TouchableOpacity>
            </View>
            <Text style={styles.eventDescription}>Description</Text>
            <Text style={styles.descriptionText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <View style={styles.quantityContainer}>
                <Text style={styles.quantityLabel}>Quantity</Text>
                <TextInput
                    style={styles.quantityInput}
                    onChangeText={(text) => setSelectedQuantity(text)}
                    value={selectedQuantity}
                    keyboardType="numeric"
                />
            </View>
            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>Comprar</Text>
            </TouchableOpacity>
            {/* Comienza la sección de reseñas del evento */}
            <View style={styles.reviewSection}>
                <Text style={styles.reviewTitle}>Reseñas del evento</Text>
                <View style={styles.reviewRatingContainer}>
                    <Text style={styles.reviewRating}>4.9</Text>
                    <Icon name="star" size={20} color="#FFD700" />
                    <Text style={styles.reviewCount}>50 opiniones</Text>
                </View>
                <View style={styles.userReview}>
                    <Text style={styles.username}>Usuario99</Text>
                    <Text style={styles.reviewDate}>Hace 6 días</Text>
                    <Text style={styles.reviewText}>Me gustó mucho la fiesta. Gente muy agradable. Volvería a ir.</Text>
                </View>
                <View style={styles.userReview}>
                    <Text style={styles.username}>Usuario27</Text>
                    <Text style={styles.reviewDate}>Hace 6 días</Text>
                    <Text style={styles.reviewText}>Me gustó mucho la fiesta. La única crítica es que esperé 15 minutos en la fila para ingresar.</Text>
                </View>
                {/* Agrega más reseñas según sea necesario */}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    eventImage: {
        width: '100%',
        height: 300,
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    eventName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    priceRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    eventPrice: {
        fontSize: 20,
        color: 'green',
    },
    eventRating: {
        fontSize: 18,
        marginLeft: 4, // Este margen acerca la estrella al rating
    },
    favoriteButton: {
        // El estilo que necesites
    },
    eventDescription: {
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
    },
    descriptionText: {
        fontSize: 14,
        padding: 10,
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    quantityLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    quantityInput: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        width: 100,
        height: 40,
        fontSize: 16,
    },
    buyButton: {
        backgroundColor: 'black',
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    buyButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    reviewSection: {
        marginTop: 20,
        padding: 10,
    },
    reviewTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    reviewRatingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewRating: {
        fontSize: 18,
        marginRight: 5,
    },
    reviewCount: {
        fontSize: 16,
        color: 'grey',
        marginLeft: 5,
    },
    userReview: {
        marginTop: 10,
        paddingVertical: 10,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    reviewDate: {
        fontSize: 14,
        color: 'grey',
        marginBottom: 5,
    },
    reviewText: {
        fontSize: 14,
    },
    // Agrega los estilos adicionales que necesites
});

export default EventScreen;