import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const breastplaceExercises= [
  {
    id: '1',
    title: 'Supino reto com barra ou halter',
    description: `Comece com a barra na posição esticada sobre o peito, com os braços totalmente estendidos.

Empurre a barra de volta à posição inicial, contraindo o peito ao longo do movimento.`,
    gif: require('../assets/gifs/Peito/reto.gif'),
  },
  {
    id: '2',
    title: 'Supino inclinado com barra ou halter',
    description: `Segure a barra ou os halteres com as mãos ligeiramente mais largas que a largura dos ombros.

Abaixe o peso até a parte superior do peito, controlando o movimento e mantendo os cotovelos firmes.

Empurre o peso para cima até os braços ficarem estendidos, mantendo sempre a postura estável.`,
    
  gif: require('../assets/gifs/Peito/inclinado.gif'),
  },
  {
    id: '3',
    title: 'Crossover no cabo',
    description:  `Este exercício isola o peitoral, trabalhando a flexão do ombro e a adução do braço, ou seja, a aproximação dos braços no centro do corpo.
Fique em pé entre duas polias altas (de preferência com os cabos ajustados para a altura dos ombros).

Puxe as alças em direção ao centro do corpo, cruzando as mãos (se for usar um movimento de "crossover").
Retorne as mãos de forma controlada para a posição inicial.`,

  gif: require('../assets/gifs/Peito/crossover.gif'),
  },
  {
    id: '4',
    title: 'Rosca Scott',
    description: `Sente-se no banco Scott, com os braços estendidos.

Segure a barra ou halteres e, com os cotovelos fixos no banco, levante o peso até a posição de contração máxima do bíceps.

Abaixe o peso de forma controlada até os braços ficarem completamente estendidos.
`,
    gif: require('../assets/gifs/Biceps/scott.gif'),
  },
  {
    id: '5',
    title: 'Crossover no cabo',
    description:  `Este exercício isola o peitoral, trabalhando a flexão do ombro e a adução do braço, ou seja, a aproximação dos braços no centro do corpo.
Fique em pé entre duas polias altas (de preferência com os cabos ajustados para a altura dos ombros).

Puxe as alças em direção ao centro do corpo, cruzando as mãos (se for usar um movimento de "crossover").
Retorne as mãos de forma controlada para a posição inicial.`,

  gif: require('../assets/gifs/Peito/crossover.gif'),
  },
  {
    id: '6',
    title: 'Crossover no cabo',
    description:  `Este exercício isola o peitoral, trabalhando a flexão do ombro e a adução do braço, ou seja, a aproximação dos braços no centro do corpo.
Fique em pé entre duas polias altas (de preferência com os cabos ajustados para a altura dos ombros).

Puxe as alças em direção ao centro do corpo, cruzando as mãos (se for usar um movimento de "crossover").
Retorne as mãos de forma controlada para a posição inicial.`,

  gif: require('../assets/gifs/Peito/crossover.gif'),
  },
];

const BreastplaceExercises = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'} Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exercícios de Peito</Text>
      </View>
      <FlatList
        data={breastplaceExercises}
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

export default BreastplaceExercises;
