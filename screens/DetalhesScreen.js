import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetalhesScreen = ({ route }) => {
    const { treino } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{treino.nome}</Text>
            <Image source={treino.gif} style={styles.gif} />
            <Text style={styles.description}>{treino.descricao}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    gif: { width: 200, height: 200, marginBottom: 20 },
    description: { fontSize: 16, textAlign: 'center' },
});

export default DetalhesScreen;
