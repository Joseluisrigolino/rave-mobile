import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Footer from '../../components/Footer';
import Title from '../../components/Title';

const CreateNewScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleCreateNews = () => {
    console.log('Creating news with:', { title, content, image });
    // Add your logic to handle the creation of the news item here
  };

  const handleSelectEvent = () => {
    console.log('Select event');
    // Logic to select an event
  };

  const handleSelectArtist = () => {
    console.log('Select artist');
    // Logic to select an artist
  };

  const handleSelectImage = () => {
    console.log('Select image');
    // Logic to select an image
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Title />
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Título de la noticia"
        />
        <TextInput
          style={[styles.input, styles.largeInput]}
          value={content}
          onChangeText={setContent}
          placeholder="Escriba aquí la noticia"
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleSelectEvent}>
          <Text style={styles.buttonText}>Asociar noticia a evento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSelectArtist}>
          <Text style={styles.buttonText}>Asociar noticia a artista</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSelectImage}>
          <Text style={styles.buttonText}>Seleccionar imagen</Text>
        </TouchableOpacity>
        <Button title="Crear Noticia" onPress={handleCreateNews} />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    marginVertical: 8,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  largeInput: {
    height: 100,
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default CreateNewScreen;
