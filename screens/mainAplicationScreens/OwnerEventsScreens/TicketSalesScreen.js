import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from 'react-native';

import Title from '../../../components/Title';
import Footer from '../../../components/Footer';

const TicketSalesScreen = () => {
  const entries = [
    { type: 'General - Early Bird', price: 2000, quantity: 100, total: 20000 },
    { type: 'General', price: 4500, quantity: 700, total: 315000 },
    { type: 'General', price: 5000, quantity: 500, total: 250000 },
    { type: 'Vip - Early Bird', price: 5000, quantity: 50, total: 250000 },
    { type: 'Vip', price: 7000, quantity: 200, total: 1400000 }
  ];

  const totalCollected = entries.reduce((acc, entry) => acc + entry.total, 0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Title text="Entradas vendidas de Nombre de Evento 1" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.dateInfo}>Información al 12/12/2024 a las 18:03hs</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableHeader}>Tipo de entrada</Text>
            <Text style={styles.tableHeader}>Precio</Text>
            <Text style={styles.tableHeader}>Cantidad</Text>
            <Text style={styles.tableHeader}>Total</Text>
          </View>
          {entries.map((entry, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{entry.type}</Text>
              <Text style={styles.tableCell}>${entry.price.toLocaleString()}</Text>
              <Text style={styles.tableCell}>{entry.quantity}</Text>
              <Text style={styles.tableCell}>${entry.total.toLocaleString()}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.totalCollected}>Total recaudado al momento: ${totalCollected.toLocaleString()}</Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Volver</Text>
        </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateInfo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    width: '100%',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  tableHeader: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
  },
  totalCollected: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    backgroundColor: '#000',
    padding: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  }
});

export default TicketSalesScreen;
