import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const costaExercises = [
  {
    id: '1',
    title: 'Remada Unilateral',
    description: 'Um ótimo exercício para fortalecer as pernas.',
    gif: require('../assets/gifs/Costas/remadauni.gif'),
  },
  {
    id: '2',
    title: 'Peck Deck Invertido',
    description: `Primeiramente, selecione o peso na máquina e, em seguida, comece a ajustar o peck deck para fazer o voador invertido. Sente-se de modo que seus pés toquem o chão e seu peito encoste na almofada. 
    
    As alças da máquina devem estar na mesma altura dos seus ombros e à frente do seu corpo. 

    Segure as alças com pegada pronada ou neutra e pulsos firmes. Mantenha os cotovelos levemente flexionados. 
    
    Então, contraia o deltóide posterior e abra os braços para trás puxando o peso até a linha dos ombros ao mesmo tempo em que solta o ar. Você vai sentir as omoplatas (ossos da parte posterior e superior do tórax) se aproximando. Volte lentamente os braços para a posição inicial enquanto inspira. `,
    gif: require('../assets/gifs/Costas/packdeck.gif'),
  },
  {
    id: '3',
    title: 'Peck Deck Invertido',
    description: `Primeiramente, selecione o peso na máquina e, em seguida, comece a ajustar o peck deck para fazer o voador invertido. Sente-se de modo que seus pés toquem o chão e seu peito encoste na almofada. 
    
    As alças da máquina devem estar na mesma altura dos seus ombros e à frente do seu corpo. 

    Segure as alças com pegada pronada ou neutra e pulsos firmes. Mantenha os cotovelos levemente flexionados. 
    
    Então, contraia o deltóide posterior e abra os braços para trás puxando o peso até a linha dos ombros ao mesmo tempo em que solta o ar. Você vai sentir as omoplatas (ossos da parte posterior e superior do tórax) se aproximando. Volte lentamente os braços para a posição inicial enquanto inspira. `,
    gif: require('../assets/gifs/Costas/packdeck.gif'),
  },
  {
    id: '4',
    title: 'Peck Deck Invertido',
    description: `Primeiramente, selecione o peso na máquina e, em seguida, comece a ajustar o peck deck para fazer o voador invertido. Sente-se de modo que seus pés toquem o chão e seu peito encoste na almofada. 
    
    As alças da máquina devem estar na mesma altura dos seus ombros e à frente do seu corpo. 

    Segure as alças com pegada pronada ou neutra e pulsos firmes. Mantenha os cotovelos levemente flexionados. 
    
    Então, contraia o deltóide posterior e abra os braços para trás puxando o peso até a linha dos ombros ao mesmo tempo em que solta o ar. Você vai sentir as omoplatas (ossos da parte posterior e superior do tórax) se aproximando. Volte lentamente os braços para a posição inicial enquanto inspira. `,
    gif: require('../assets/gifs/Costas/packdeck.gif'),
  },
];

const CostaExercises = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'} Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exercícios de Costas</Text>
      </View>
      <FlatList
        data={costaExercises}
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

export default CostaExercises;
