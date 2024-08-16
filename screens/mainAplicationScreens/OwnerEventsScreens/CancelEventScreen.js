import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView 
} from 'react-native';

import Title from '../../../components/Title';
import Footer from '../../../components/Footer';

const CancelEventScreen = () => {
  const [reason, setReason] = useState('');

  const handleCancel = () => {
    alert('El evento ha sido cancelado.');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Title text="Cancelación de evento" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.description}>
          Si cancelas este evento, a continuación debes informar el motivo.
          La cancelación del evento se le avisará por mail a las personas
          que hayan comprado una entrada, junto con el motivo que
          describes, y se procederá a realizar la devolución del dinero de
          las entradas.
        </Text>
        <Text style={styles.eventDetails}>
          Evento a cancelar: Nombre de evento 1
        </Text>
        <Text style={styles.refundDetails}>
          Se reembolsarán:
          {'\n'}• 20 Entradas Generales de $5.000 c/u
          {'\n'}• 15 Entradas Vip de $7.000 c/u
        </Text>
        <Text style={styles.totalRefund}>
          Total a devolver: $205.000
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={setReason}
          value={reason}
          placeholder="Motivo"
          multiline
        />
        <Text style={styles.warning}>
          * Esta operación no puede ser reversada.
        </Text>
        <Button
          title="Cancelar Evento"
          onPress={handleCancel}
          color="#FF6347"
        />
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
  description: {
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
  },
  eventDetails: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  refundDetails: {
    fontSize: 16,
    marginBottom: 10,
  },
  totalRefund: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    padding: 10,
  },
  warning: {
    fontSize: 14,
    color: 'red',
    marginBottom: 20,
  }
});

export default CancelEventScreen;
