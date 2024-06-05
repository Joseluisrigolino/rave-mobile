import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  Button, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  SafeAreaView,
  Switch
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Title from '../../../components/Title';
import Footer from '../../../components/Footer';
import DateTimePicker from '@react-native-community/datetimepicker';

const AddEventScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventName, setEventName] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [imageUri, setImageUri] = useState('');
  const genres = ['Rock', 'Pop', 'Electrónica', 'Jazz', 'Clásica', 'Reggaeton', 'Hip-Hop'];
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const handleImagePicker = () => {
    // Logica para seleccionar una imagen
  };

  const handleSubmit = () => {
    // Logica para crear el evento
    alert(`Evento ${eventName} con género ${selectedGenre} creado!`);
  };

  const availableArtists = [
    { id: 1, name: 'Artista 1' },
    { id: 2, name: 'Artista 2' },
    { id: 3, name: 'Artista 3' },
    // ... más artistas
  ];
  const [selectedArtists, setSelectedArtists] = useState(new Set());
  const [artists, setArtists] = useState([{ id: Date.now(), name: '' }]);


  const toggleArtistSelection = artistId => {
    setSelectedArtists(prev => {
      const newSelection = new Set(prev);
      if (newSelection.has(artistId)) {
        newSelection.delete(artistId);
      } else {
        newSelection.add(artistId);
      }
      return newSelection;
    });
  };
  
  const handleArtistChange = (text, id) => {
    setArtists(artists.map(artist => artist.id === id ? { ...artist, name: text } : artist));
  };

  const addArtist = () => {
    setArtists(artists.concat({ id: Date.now(), name: '' }));
  };

  const removeArtist = id => {
    setArtists(artists.filter(artist => artist.id !== id));
  };

  const [province, setProvince] = useState('');
  const [party, setParty] = useState('');
  const [locality, setLocality] = useState('');
  const [address, setAddress] = useState('');
  const [isAfter, setIsAfter] = useState(false);
  const [isLGBTQEvent, setIsLGBTQEvent] = useState(false);
  const [eventDescription, setEventDescription] = useState('');


   // Funciones para manejar el DateTimePicker
   const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); // Solo para iOS, necesitarás manejar esto de manera condicional si tu app también está en Android
    setDate(currentDate);
    // Para Android, esto cerrará el picker después de seleccionar la fecha
    if (Platform.OS === 'android') {
      setShow(false);
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    setShow(true);
  setMode('date');
  };

  const showTimepicker = () => {
    setShow(true);
  setMode('time');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <Title style={styles.fullWidth} />
      <Text style={styles.headerSubtitle}>Crear evento</Text>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.label}>Nombre Organizador:</Text>
          <TextInput
            placeholder="Nombre del organizador"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />
          <Text style={styles.label}>Telefono:</Text>
          <TextInput
            placeholder="Teléfono del organizador"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />
          <Text style={styles.label}>Email:</Text>
          <TextInput
            placeholder="Email del organizador"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
          <Text style={styles.note}>
            *Te crearemos una cuenta con tu nombre y correo para que puedas administrar tus eventos, te enviaremos una contraseña al correo ingresado.
          </Text>
          <TouchableOpacity onPress={handleImagePicker} style={styles.imagePicker}>
            <Text>IMG</Text>
            {imageUri ? <Image source={{ uri: imageUri }} style={styles.image} /> : null}
          </TouchableOpacity>
          <Text style={styles.label}>Nombre del evento:</Text>
          <TextInput
            placeholder="Nombre del evento"
            value={eventName}
            onChangeText={setEventName}
            style={styles.input}
          />
          <Text style={styles.label}>Género musical:</Text>
          <Picker
            selectedValue={selectedGenre}
            onValueChange={(itemValue, itemIndex) => setSelectedGenre(itemValue)}
            style={styles.picker}
          >
            {genres.map((genre, index) => (
              <Picker.Item key={index} label={genre} value={genre} />
            ))}
          </Picker>

          <Text style={styles.label}>Artista/s:</Text>
          {artists.map((artist, index) => (
            <View key={artist.id} style={styles.artistContainer}>
              <TextInput
                placeholder={`Artista ${index + 1}`}
                value={artist.name}
                onChangeText={(text) => handleArtistChange(text, artist.id)}
                style={styles.input}
              />
              <TouchableOpacity onPress={() => removeArtist(artist.id)} style={styles.removeButton}>
                <Text style={styles.removeButtonText}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
          <TouchableOpacity onPress={addArtist} style={styles.addButton}>
            <Text style={styles.addButtonText}>Agregar</Text>
          </TouchableOpacity>
           {/* Nueva sección para ubicación del evento y otros campos */}
           <Text style={styles.label}>Ubicación del evento:</Text>
<Text style={styles.label}>Provincia:</Text>
<Picker
  selectedValue={province}
  onValueChange={(itemValue) => setProvince(itemValue)}
  style={styles.picker}>
  {/* Inserta las opciones de provincia aquí */}
</Picker>
<Text style={styles.label}>Partido:</Text>
<Picker
  selectedValue={party}
  onValueChange={(itemValue) => setParty(itemValue)}
  style={styles.picker}>
  {/* Inserta las opciones de partido aquí */}
</Picker>
<Text style={styles.label}>Localidad/Barrio:</Text>
<Picker
  selectedValue={locality}
  onValueChange={(itemValue) => setLocality(itemValue)}
  style={styles.picker}>
  {/* Inserta las opciones de localidad/barrio aquí */}
</Picker>
          <TextInput
            placeholder="Dirección del evento"
            value={address}
            onChangeText={setAddress}
            style={styles.input}
          />
          <View style={styles.switchContainer}>
            <Text style={styles.label}>Es after?</Text>
            <Switch
              value={isAfter}
              onValueChange={setIsAfter}
            />
          </View>
          <View style={styles.switchContainer}>
            <Text style={styles.label}>Es un evento LGBTQ?</Text>
            <Switch
              value={isLGBTQEvent}
              onValueChange={setIsLGBTQEvent}
            />
          </View>
          <TextInput
            placeholder="Descripción del evento"
            value={eventDescription}
            onChangeText={setEventDescription}
            style={styles.textArea}
            multiline
          />
          <Text style={styles.label}>Fecha y hora de inicio del evento:</Text>
        <View style={styles.datetimeContainer}>
          <Button onPress={showDatepicker} title="Selecciona fecha" />
          <Button onPress={showTimepicker} title="Selecciona hora" />
        </View>
        {/* <DateTimePicker
    testID="dateTimePicker"
    value={date}
    mode={mode}
    is24Hour={true}
    display="default"
    onChange={onChange}
  /> */}
          <Button title="Crear Evento" onPress={handleSubmit} />
        </View>
      </ScrollView>
      <Footer style={styles.fullWidth} />
      
    </SafeAreaView>
          
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  fullWidth: {
    width: '100%',
    // Agrega aquí cualquier estilo adicional para Title y Footer
  },
  scrollView: {
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  note: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 20,
  },
  imagePicker: {
    borderWidth: 1,
    borderColor: 'black',
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  artistContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    padding: 10,
    borderRadius: 4,
    },
    addButton: {
    backgroundColor: '#22ee22', // Color verde para el botón agregar
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 4,
    alignItems: 'center',
    },
    addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    },
    removeButton: {
    marginLeft: 10,
    backgroundColor: 'red', // Color rojo para el botón eliminar
    padding: 5,
    borderRadius: 4,
    },
    removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    },
    // ... otros estilos que necesites ...
    picker: {
      height: 50,
      width: '100%',
      marginBottom: 20,
    },
    textArea: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      padding: 10,
      minHeight: 100, // Ajusta esto según tus necesidades
      marginBottom: 20,
      textAlignVertical: 'top',
    },
    header: {
      backgroundColor: '#00CED1', // Turquesa
      padding: 10,
      paddingTop: 40, // Depende del tamaño de tu barra de estado
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      color: 'white',
      fontSize: 22,
      fontWeight: 'bold',
    },
    headerSubtitle: {
      color: 'black',
      fontSize: 18,
      fontWeight: 'bold', // Cambiado de 'normal' a 'bold' para hacerlo más negrita
      marginTop: 5, // Espacio entre el título y el subtítulo
      marginLeft: 10,
    },
    subtitleBorder: {
      borderBottomWidth: 2,  // Grosor del borde
      borderBottomColor: 'black',  // Color del borde
      paddingBottom: 8,  // Espacio entre el texto y el borde
      marginBottom: 20,  // Margen debajo del borde
    },
    switchContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    datetimeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20, // Ajusta esto para la separación vertical con otros elementos
    },
    dateButton: {
      backgroundColor: '#007AFF', // Color azul para el botón de fecha
      padding: 10,
      borderRadius: 4,
      marginBottom: 10, // Ajusta esto para la separación vertical entre botones
    },
    timeButton: {
      backgroundColor: '#007AFF', // Color azul para el botón de hora
      padding: 10,
      borderRadius: 4,
      marginBottom: 10, // Ajusta esto para la separación vertical entre botones
    },
});

export default AddEventScreen;
