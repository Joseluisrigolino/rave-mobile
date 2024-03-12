import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
   
<View style={styles.container}>
    <View style={styles.header}>
      {/* Los otros elementos de tu header irían aquí */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Rave App</Text>
      </View>
      {/* Los otros elementos de tu header irían aquí */}
    </View>





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





    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Search"
        style={styles.searchInput}
      />
      <TouchableOpacity style={styles.searchIcon}>
        <Icon name="search" size={20} color="#000" />
      </TouchableOpacity>
    </View>






    <View style={styles.menu}>
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.menuScrollView}
    >
        <View style={styles.menu}>
          {/* Add as many TouchableOpacity components as needed for your categories */}
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Acid</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Dubstep</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>House</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Trance</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Drum and bass</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>EDM</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Crunk</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
        
      </View>

      






    <ScrollView style={styles.cardsContainer}>
        
            <View style={styles.card}>
                <Image
                source={{ uri: 'https://picsum.photos/200' }}
                style={styles.coffeeImage}
                />
                <Text style={styles.coffeeName}>Fiesta en casa</Text>
                <View style={styles.ratingContainer}>
                <Text style={styles.rating}>18/06/2002</Text>
                </View>
                <Text style={styles.volume}>Fiesta en casa de un amigo</Text>
                <TouchableOpacity style={styles.addButton}>
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <Image
                source={{ uri: 'https://picsum.photos/600' }}
                style={styles.coffeeImage}
                />
                <Text style={styles.coffeeName}>Fiesta en casa</Text>
                <View style={styles.ratingContainer}>
                <Text style={styles.rating}>18/06/2002</Text>
                </View>
                <Text style={styles.volume}>Fiesta en casa de un amigo</Text>
                <TouchableOpacity style={styles.addButton}>
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <Image
                source={{ uri: 'https://picsum.photos/400' }}
                style={styles.coffeeImage}
                />
                <Text style={styles.coffeeName}>Fiesta en casa</Text>
                <View style={styles.ratingContainer}>
                <Text style={styles.rating}>18/06/2002</Text>
                </View>
                <Text style={styles.volume}>Fiesta en casa de un amigo</Text>
                <TouchableOpacity style={styles.addButton}>
                </TouchableOpacity>
            </View>
    </ScrollView>









    <View style={styles.footer}>
        <TouchableOpacity>
          <Icon name="home" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="heart" style={styles.footerIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Icon name="user" style={styles.footerIcon} />
        <Icon name="music" style={[styles.footerIcon, styles.musicIcon]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {/* Navegar a la página de agregar evento */}}>
        <Icon2 name="calendar-plus-o" size={24} color="white" />
      </TouchableOpacity>
      </View>

</View>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingBottom: 60,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center', // Esto centrará el texto en el eje horizontal
    alignItems: 'center', // Esto centrará el texto en el eje vertical
    backgroundColor: '#000', // Esto establecerá el color de fondo del header a negro
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  searchButton: {
    // Style for search button
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  menuScrollView: {
    flexGrow: 0, // Add this to prevent the ScrollView from expanding to fill space
  },
  menuItem: {
    backgroundColor: '#E0E0E0', // Un gris claro para el fondo del globo
    borderRadius: 20, // Esto dará la forma redondeada al globo
    paddingVertical: 5, // Espacio vertical dentro del globo
    paddingHorizontal: 8, // Espacio horizontal dentro del globo
    marginHorizontal: 10, // Espacio entre cada globo
    alignItems: 'center', // Asegura que el texto esté centrado
    justifyContent: 'center', // Asegura que el texto esté centrado
  },
  menuItemText: {
    color: '#000',
    fontSize: 15 // Color del texto, puedes cambiarlo si quieres
    // ... otros estilos para el texto
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    alignItems: 'center', // Centra elementos horizontalmente
    justifyContent: 'center', // Centra elementos verticalmente
  },
  cardsContainer: {
    flex: 1, // Esto permite que el ScrollView tome todo el espacio restante
    flex: 1, // This will ensure the ScrollView takes up all available space in the red area
    marginTop: 10, // Adjust as necessary for spacing
    paddingBottom: 60,
},
  coffeeImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
},
coffeeImage: {
    width: 150,
    height: 150,
    borderRadius: 80,
    // No más cambios necesarios aquí
  },
  coffeeName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    // No más cambios necesarios aquí
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // No más cambios necesarios aquí
  },
  rating: {
    fontSize: 18,
    // No más cambios necesarios aquí
  },
  volume: {
    fontSize: 16,
    color: 'grey',
    marginTop: 5,
    // No más cambios necesarios aquí
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    // No más cambios necesarios aquí
  },
  addButton: {
    // Elimina `position: 'absolute'` y añade márgenes si es necesario
    marginTop: 10, // Ajusta como sea necesario
    // Añade estilos para tamaño y alineación del icono
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000000',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    // El valor de la sombra varía según quieras el efecto de elevación
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5, // Solo para Android
  },
  footerIcon: {
    fontSize: 24,
    color: 'white',
  },
  musicIcon: {
    position: 'absolute', // Coloca el icono de la música sobre el icono de la persona
    right: -15, // Ajusta la posición como sea necesario
    top: -10, // Ajusta la posición como sea necesario
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 20,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    color: '#000',
  },
  searchIcon: {
    padding: 5,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    // Agrega otros estilos como sombra, color de fondo, etc., según sea necesario
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    marginLeft: 5, // Espacio entre el icono de ubicación y el texto
    fontSize: 18, // Tamaño de fuente que coincida con tu diseño
    fontWeight: 'bold', // Si el texto es en negrita
    // Agrega otros estilos de texto como color, etc., según sea necesario
  },
});

export default HomeScreen;