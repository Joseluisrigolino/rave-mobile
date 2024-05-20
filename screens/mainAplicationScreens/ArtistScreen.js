import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

const ArtistDetailScreen = () => {
    const artistData = {
        id: 2,
        nombre: 'Artista 2',
        imagen: 'https://picsum.photos/220',
        likes: 150,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };

    const [artist, setArtist] = useState(artistData);
    const [isLiked, setIsLiked] = useState(false);

    const handleLikePress = () => {
        setIsLiked(!isLiked);
        // Increment or decrement the likes count based on the current state
        setArtist(prevArtist => ({
            ...prevArtist,
            likes: isLiked ? prevArtist.likes - 1 : prevArtist.likes + 1
        }));
    };

    return (
        <View style={styles.mainContainer}>
            <Title />
            <ScrollView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.artistName}>{artist.nombre}</Text>
                    <View style={styles.icons}>
                        <Icon name="spotify" size={24} color="#1DB954" />
                        <Icon name="soundcloud" size={24} color="#FF3300" />
                        <Icon name="instagram" size={24} color="#C13584" />
                    </View>
                </View>
                <View style={styles.content}>
                    <Image source={{ uri: artist.imagen }} style={styles.image} />
                    <TouchableOpacity style={styles.likesContainer} onPress={handleLikePress}>
                        <Icon name={isLiked ? "heart" : "heart-o"} size={24} color="red" />
                        <Text style={styles.likesText}>{artist.likes} personas les gusta este artista.</Text>
                    </TouchableOpacity>
                    <Text style={styles.description}>{artist.descripcion}</Text>
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
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    artistName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    icons: {
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-between',
    },
    content: {
        alignItems: 'center',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
        marginBottom: 20,
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    likesText: {
        marginLeft: 10,
        fontSize: 16,
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
        color: 'grey',
    },
});

export default ArtistDetailScreen;
