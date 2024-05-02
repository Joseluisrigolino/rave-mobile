import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image, 
  SafeAreaView
} from 'react-native';

import Footer from '../../components/Footer'; 

const NewsScreen = () => {
  const newsItems = [
    { id: 1, title: 'Título de la noticia 1', imgSrc: 'https://picsum.photos/200?random=1' },
    { id: 2, title: 'Título de la noticia 2', imgSrc: 'https://picsum.photos/200?random=2' },
    { id: 3, title: 'Título de la noticia 3', imgSrc: 'https://picsum.photos/200?random=3' }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Rave App</Text>
      <Text style={[styles.headerSubtitle, styles.subtitleBorder]}>Novedades</Text>
      <ScrollView style={styles.scrollView}>
        {newsItems.map((item) => (
          <View key={item.id} style={styles.newsItem}>
            <Image source={{ uri: item.imgSrc }} style={styles.newsImage} />
            <Text style={styles.newsTitle}>{item.title}</Text>
          </View>
        ))}
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
  }
});

export default NewsScreen;
