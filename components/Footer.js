// Footer.js
import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity>
        <Icon2 name="home" style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon2 name="heart" style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon2 name="user" style={styles.footerIcon} />
        <Icon2 name="music" style={[styles.footerIcon, styles.musicIcon]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {/* Navegar a la página de agregar evento */}}>
        <Icon2 name="calendar-plus-o" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {/* Navegar a Entradas Adquiridas */}}>
        <Icon2 name="ticket" size={24} color="white" style={styles.footerIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {/* Navegar a Novedades */}}>
        <Icon2 name="newspaper-o" size={24} color="white" style={styles.footerIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#000000',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
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
    position: 'absolute',
    right: -15,
    top: -10,
  },
});

export default Footer;