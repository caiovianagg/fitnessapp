import React from 'react';
import { View, FlatList, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { treinos } from '../data/treinos';
import { firebase } from '../firebaseConfig';

const registrarProgresso = async (treinoId) => {
    const userId = firebase.auth().currentUser.uid;
    try {
        await firebase.firestore().collection('progresso').add({
            userId,
            treinoId,
            data: new Date(),
        });
    } catch (error) {
        console.error("Erro ao registrar progresso:", error);
    }
};


const TreinosScreen = ({ navigation }) => {
    const renderTreino = ({ item }) => (
        <TouchableOpacity style={styles.treinoContainer} onPress={() => navigation.navigate('Detalhes', { treino: item })}>
            <Image source={item.gif} style={styles.gif} />
            <Text style={styles.nome}>{item.nome}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={treinos}
                keyExtractor={(item) => item.id}
                renderItem={renderTreino}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    treinoContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
    gif: { width: 50, height: 50, marginRight: 10 },
    nome: { fontSize: 16 },
});

export default TreinosScreen;
