// Title.js
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Title = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Rave App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});

export default Title;
