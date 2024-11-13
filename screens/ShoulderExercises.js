import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const shoulderExercises = [
  {
    id: '1',
    title: 'Supino reto com barra ou halter',
    description: `Comece com a barra na posição esticada sobre o peito, com os braços totalmente estendidos.

Empurre a barra de volta à posição inicial, contraindo o peito ao longo do movimento.`,
    gif: require('../assets/gifs/Peito/reto.gif'),
  },
  {
    id: '2',
    title: 'Elevação lateral com halteres',
    description: `Fique em pé, com um haltere em cada mão e os braços ao longo do corpo.

    Levante os halteres para os lados até que os braços fiquem paralelos ao chão, com os cotovelos ligeiramente flexionados.

    Mantenha uma leve contração no topo e abaixe os halteres lentamente até a posição inicial. 
`,
    gif: require('../assets/gifs/Ombro/elevacaolateral.gif'),
  },
  {
    id: '3',
    title: 'Elevação frontal com halteres',
    description: `Fique em pé, segurando um haltere em cada mão com as palmas voltadas para as coxas.
    
    Levante os halteres para frente até a altura dos ombros, mantendo os cotovelos ligeiramente flexionados.

    Abaixe os halteres de forma controlada até a posição inicial.`,
    gif: require('../assets/gifs/Ombro/elevacaofrontal.gif'),
  },
  {
    id: '4',
    title: 'Elevação frontal com halteres',
    description: `Fique em pé, segurando um haltere em cada mão com as palmas voltadas para as coxas.
    
    Levante os halteres para frente até a altura dos ombros, mantendo os cotovelos ligeiramente flexionados.

    Abaixe os halteres de forma controlada até a posição inicial.`,
    gif: require('../assets/gifs/Ombro/elevacaofrontal.gif'),
  },
  {
    id: '5',
    title: 'Elevação frontal com halteres',
    description: `Fique em pé, segurando um haltere em cada mão com as palmas voltadas para as coxas.
    
    Levante os halteres para frente até a altura dos ombros, mantendo os cotovelos ligeiramente flexionados.

    Abaixe os halteres de forma controlada até a posição inicial.`,
    gif: require('../assets/gifs/Ombro/elevacaofrontal.gif'),
  },
  {
    id: '6',
    title: 'Elevação frontal com halteres',
    description: `Fique em pé, segurando um haltere em cada mão com as palmas voltadas para as coxas.
    
    Levante os halteres para frente até a altura dos ombros, mantendo os cotovelos ligeiramente flexionados.

    Abaixe os halteres de forma controlada até a posição inicial.`,
    gif: require('../assets/gifs/Ombro/elevacaofrontal.gif'),
  },
];

const ShoulderExercises = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'} Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exercícios de Ombro</Text>
      </View>
      <FlatList
        data={shoulderExercises}
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

export default ShoulderExercises;
