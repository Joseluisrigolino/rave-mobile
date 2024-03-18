import { React, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Footer from '../../components/Footer';
import Category from '../../components/Category';
import EventCard from '../../components/EventCard';
import SearchBar from '../../components/SearchBar';
import Title from '../../components/Title';

const HomeScreen = () => {
    const [likedEvents, setLikedEvents] = useState({});
    const categories = ['Acid', 'Dubstep', 'House', 'Trance', 'Drum and bass', 'EDM', 'Crunk'];
    const events = [
        {
            id: 1,
            name: 'Fiesta en casa',
            date: '18/06/2002',
            description: 'Fiesta en casa de un amigo',
            imageUrl: 'https://picsum.photos/200',
            liked: false,
        },
        {
            id: 2,
            name: 'Tomorrowland',
            date: '31/02/2024',
            description: 'Fiesta en casa de un amigo',
            imageUrl: 'https://picsum.photos/300',
            liked: true,
        }
    ];

    const handleLikePress = (eventId) => {
        setLikedEvents((prevLikedEvents) => ({
            ...prevLikedEvents,
            [eventId]: !prevLikedEvents[eventId],
        }));
    };

    return (
        <View style={styles.container}>
            <Title />

            <View style={styles.topBar}>
                <TouchableOpacity>
                    <Icon2 name="user-circle-o" size={24} color="#000" />
                </TouchableOpacity>
                <View style={styles.locationContainer}>
                    <Icon2 name="map-marker" size={20} color="#000" />
                    <Text style={styles.locationText}>Villa Ballester, BS AS</Text>
                </View>
                <TouchableOpacity>
                    <Icon2 name="bell-o" size={24} color="#000" />
                </TouchableOpacity>
            </View>
            <SearchBar placeholder="Buscar evento" />
            <View style={styles.menu}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.menuScrollView}>
                    {categories.map((category, index) => (
                        <Category key={index} name={category} />
                    ))}
                </ScrollView>
            </View>
            <ScrollView style={styles.cardsContainer}>
                {events.map(event => (
                    <EventCard
                        key={event.id}
                        eventName={event.name}
                        eventDate={event.date}
                        eventDescription={event.description}
                        imageUrl={event.imageUrl}
                        liked={!!likedEvents[event.id]}
                        onLikePress={() => handleLikePress(event.id)}
                    />
                ))}
            </ScrollView>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingBottom: 0,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    menuScrollView: {
        flexGrow: 0,
        padding: 10,
    },
    cardsContainer: {
        flex: 1,
        marginTop: 10,
        paddingBottom: 0,
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        marginLeft: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
