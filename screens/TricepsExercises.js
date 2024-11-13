import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const tricepsExercises = [
  {
    id: '1',
    title: 'Tríceps polia',
    description: `Com a polia ajustada no nível mais alto.
Puxe a barra para baixo, mantendo os cotovelos próximos ao corpo, até que os braços fiquem totalmente estendidos.
Retorne o cabo de forma controlada, sem deixar os cotovelos se moverem para frente.

Mergulho em paralela
Posicione-se entre as barras paralelas e segure-as com as palmas das mãos voltadas para dentro.
Levante-se para a posição inicial com os braços estendidos.
Empurre o corpo para cima, estendendo os cotovelos e retornando à posição inicial.`,
    gif: require('../assets/gifs/Triceps/tricepspolia.gif'),
  },
  {
    id: '2',
    title: 'Tríceps Teste',
    description: `Comece com os braços estendidos acima do peito, mantendo os cotovelos próximos à cabeça.

Flexione os cotovelos, levando a barra em direção à testa (ou um pouco acima da testa).

Estenda os cotovelos de volta à posição inicial, concentrando-se na contração do tríceps.
`,
    gif: require('../assets/gifs/Triceps/tricepstesta.gif'),
  },
  {
    id: '3',
    title: 'Tríceps polia',
    description: `Com a polia ajustada no nível mais alto.
Puxe a barra para baixo, mantendo os cotovelos próximos ao corpo, até que os braços fiquem totalmente estendidos.
Retorne o cabo de forma controlada, sem deixar os cotovelos se moverem para frente.

Mergulho em paralela
Posicione-se entre as barras paralelas e segure-as com as palmas das mãos voltadas para dentro.
Levante-se para a posição inicial com os braços estendidos.
Empurre o corpo para cima, estendendo os cotovelos e retornando à posição inicial.`,
    gif: require('../assets/gifs/Triceps/tricepspolia.gif'),
  },
  {
    id: '4',
    title: 'Tríceps polia',
    description: `Com a polia ajustada no nível mais alto.
Puxe a barra para baixo, mantendo os cotovelos próximos ao corpo, até que os braços fiquem totalmente estendidos.
Retorne o cabo de forma controlada, sem deixar os cotovelos se moverem para frente.

Mergulho em paralela
Posicione-se entre as barras paralelas e segure-as com as palmas das mãos voltadas para dentro.
Levante-se para a posição inicial com os braços estendidos.
Empurre o corpo para cima, estendendo os cotovelos e retornando à posição inicial.`,
    gif: require('../assets/gifs/Triceps/tricepspolia.gif'),
  },
  
];

const TricepsExercises = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'} Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exercícios de Tríceps</Text>
      </View>
      <FlatList
        data={tricepsExercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.exerciseItem}
            onPress={() => navigation.navigate('ExerciseDetail', { exercise: item })}
          >
            <Image source={item.gif} style={styles.exerciseGif} />
            <Text style={styles.exerciseTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f7ff',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#B3E5FC',
    marginBottom: 10,
    borderRadius: 8,
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007aff',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: 20, 
  },
  exerciseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 12,
  },
  exerciseGif: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TricepsExercises;
