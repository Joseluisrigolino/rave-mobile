import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';
import Title from '../../components/Title';

const ArriveScreen = () => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [routes, setRoutes] = useState([]);

  const searchRoutes = () => {
    // Aquí deberías implementar la lógica para buscar rutas
    // Simularemos algunas rutas por ahora
    setRoutes([
      { id: 1, description: 'Caminar hasta la estación y tomar el bus 111', duration: '17 mins' },
      { id: 2, description: 'Tomar el metro línea A', duration: '20 mins' }
    ]);
  };

  return (
    <View>
        <Title></Title>
    <View style={styles.container}>
    
      <Text style={styles.title}>Cómo llegar a: [nombre del evento]</Text>
      <TextInput
        style={styles.input}
        onChangeText={setOrigin}
        value={origin}
        placeholder="Ubicación actual / Dirección de origen"
      />
      <TextInput
        style={styles.input}
        onChangeText={setDestination}
        value={destination}
        placeholder="[Dirección del evento]"
      />
      <Button title="Buscar" onPress={searchRoutes} />

      <Text style={styles.subtitle}>Trayectos sugeridos</Text>
      <ScrollView style={styles.routesContainer}>
        {routes.map(route => (
          <View key={route.id} style={styles.route}>
            <Text>{route.description}</Text>
            <Text>{route.duration}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.mapContainer}>
        <Text>Mapa</Text>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  routesContainer: {
    marginBottom: 20,
  },
  route: {
    backgroundColor: '#e9e9e9',
    padding: 10,
    marginBottom: 10,
  },
  mapContainer: {
    height: 200,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default ArriveScreen;
