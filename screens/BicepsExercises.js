import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const bicepsExercises = [
  {
    id: '1',
    title: 'Bíceps na polia',
    description: `Fique em pé em frente a uma máquina de cabo com uma barra reta ou corda, com a polia ajustada na posição mais baixa.

Segure a barra ou corda com as mãos na largura dos ombros, mantendo os cotovelos fixos ao lado do corpo.

Puxe a barra ou corda em direção aos ombros, concentrando-se na contração do bíceps.`,
    gif: require('../assets/gifs/Biceps/bicepspolia.gif'),
  },
  {
    id: '2',
    title: 'Rosca direta',
    description: `Fique em pé, com os pés na largura dos ombros e segure a barra com as mãos na largura dos ombros.

Mantenha os cotovelos perto do corpo e os ombros estáveis.

Dobre os cotovelos e levante a barra em direção aos ombros, concentrando-se em contrair o bíceps.

Abaixe a barra de forma controlada até os braços ficarem totalmente estendidos.`,
    
  gif: require('../assets/gifs/Biceps/roscadireta.gif'),
  },
  {
    id: '3',
    title: 'Rosca martelo',
    description:  `Fique em pé com um haltere em cada mão, com as palmas voltadas para o corpo (pegada neutra).

Levante os halteres em direção aos ombros, mantendo os cotovelos fixos ao lado do corpo.

Abaixe os halteres de forma controlada até que os braços fiquem totalmente estendidos.`,

  gif: require('../assets/gifs/Biceps/roscamartelo.gif'),
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
];

const BicepsExercises = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'} Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exercícios de Bíceps</Text>
      </View>
      <FlatList
        data={bicepsExercises}
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

export default BicepsExercises;
