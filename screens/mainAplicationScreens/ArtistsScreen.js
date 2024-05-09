import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TextInput } from 'react-native';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

const ArtistsScreen = () => {
    const initialArtists = [
        { id: 1, nombre: 'Zapata', imagen: 'https://picsum.photos/200' },
        { id: 2, nombre: 'Artista 2', imagen: 'https://picsum.photos/220' },
        { id: 3, nombre: 'Banco', imagen: 'https://picsum.photos/230' },
        { id: 4, nombre: 'Artista 4', imagen: 'https://picsum.photos/240' },
        { id: 5, nombre: 'Artista 5', imagen: 'https://picsum.photos/250' },
    ];

    const [artists, setArtists] = useState(initialArtists.sort((a, b) => a.nombre.localeCompare(b.nombre)));
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (text) => {
        setSearchQuery(text);
        const filteredAndSortedArtists = initialArtists
            .filter(artist => artist.nombre.toLowerCase().includes(text.toLowerCase()))
            .sort((a, b) => a.nombre.localeCompare(b.nombre));
        setArtists(filteredAndSortedArtists);
    };

    return (
        <View style={styles.mainContainer}>
            <Title />
            <TextInput
                style={styles.searchBar}
                placeholder="Buscar artistas..."
                value={searchQuery}
                onChangeText={handleSearch}
            />
            <ScrollView style={styles.container}>
                <View style={styles.artistList}>
                    {artists.map((artista) => (
                        <View key={artista.id} style={styles.card}>
                            <Image source={{ uri: artista.imagen }} style={styles.image} />
                            <Text style={styles.artistName}>{artista.nombre}</Text>
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
    artistList: {
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
    artistName: {
        fontSize: 16,
        paddingVertical: 5,
    },
    searchBar: {
        fontSize: 16,
        margin: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
    },
});

export default ArtistsScreen;
