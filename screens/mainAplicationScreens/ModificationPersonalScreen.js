import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from '../../components/Title';
import Footer from '../../components/Footer';

const ModificationPersonalScreen = () => {
    const initialData = {
        nombre: 'Juan',
        apellido: 'Lopez',
        dni: '98898988',
        celular: '1165652121',
        email: 'juanlopez@gmail.com',
        contrasena: '***********',
        direccion: 'Calle Malvinas Argentinas',
        numero: '8890',
        piso: '5 B',
        provincia: 'Buenos Aires',
        municipio: 'San Martin',
        localidad: 'Villa Ballester',
    };

    const [data, setData] = useState(initialData);
    const [lastConfirmedData, setLastConfirmedData] = useState(initialData);
    const [editable, setEditable] = useState({});

    const handleConfirm = () => {
        setLastConfirmedData(data); // Guarda los cambios confirmados
        setEditable({}); // Deshabilita todos los campos
    };

    const handleCancel = () => {
        setData(lastConfirmedData); // Restablece los datos al último estado confirmado
        setEditable({}); // Deshabilita todos los campos
    };

    const enableEdit = (field) => {
        setEditable({ ...editable, [field]: true });
    };

    return (
        <View style={styles.mainContainer}>
            <Title />
            <ScrollView style={styles.container}>
                <Text style={styles.headerText}>Modificación de datos personales:</Text>
                {Object.entries(data).map(([key, value]) => (
                    <View key={key} style={styles.row}>
                        <TextInput
                            style={styles.input}
                            value={value}
                            onChangeText={(text) => setData({ ...data, [key]: text })}
                            editable={!!editable[key]}
                        />
                        <TouchableOpacity style={styles.editButton} onPress={() => enableEdit(key)}>
                            <Icon name="edit" size={20} color="#000" />
                        </TouchableOpacity>
                    </View>
                ))}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                        <Text style={styles.buttonText}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={handleCancel}>
                        <Text style={styles.buttonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
    },
    editButton: {
        marginLeft: 10,
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
    },
});

export default ModificationPersonalScreen;
