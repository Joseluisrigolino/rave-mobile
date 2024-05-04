import React, { useState } from 'react';
import { Modal, TouchableOpacity, View, Text, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import Footer from '../../components/Footer';
import Title from '../../components/Title';

const NewsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const newsItems = [
    { id: 1, title: 'Título de la noticia 1', imgSrc: 'https://picsum.photos/200?random=1', description: 'Descripción detallada de la noticia 1' },
    { id: 2, title: 'Título de la noticia 2', imgSrc: 'https://picsum.photos/200?random=2', description: 'Descripción detallada de la noticia 2' },
    { id: 3, title: 'Título de la noticia 3', imgSrc: 'https://picsum.photos/200?random=3', description: 'Descripción detallada de la noticia 3' }
  ];

  const handlePress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Title></Title>
      <Text style={[styles.headerSubtitle, styles.subtitleBorder]}>Novedades</Text>
      <ScrollView style={styles.scrollView}>
        {newsItems.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handlePress(item)}>
            <View style={styles.newsItem}>
              <Image source={{ uri: item.imgSrc }} style={styles.newsImage} />
              <Text style={styles.newsTitle}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Footer />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={{ uri: selectedItem.imgSrc }} style={styles.largeImage} />
            <Text style={styles.modalTitle}>{selectedItem.title}</Text>
            <Text style={styles.modalDescription}>{selectedItem.description}</Text>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
  },
  headerSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleBorder: {
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 5,
    marginBottom: 20,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  newsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
  newsImage: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  largeImage: {
    width: 250,
    height: 250,
    marginBottom: 15,
  },
  description: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  modalDescription: {
    textAlign: 'center',
    fontSize: 14, // Tamaño más pequeño para la descripción
    color: 'grey', // Opcional: cambiar el color para diferenciar
    marginBottom: 15,
  },
});


export default NewsScreen;
