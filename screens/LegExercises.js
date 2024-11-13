import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';



const legExercises = [
  {
    id: '1',
    title: 'Cadeira Abdutora',
    description: `Sente-se na máquina, posicione os pés nos apoios, suba a trava e una as pernas vagarosamente. 
    
    Para o movimento de abdução, você deve fazer força empurrando a máquina para fora, afastando os joelhos. Depois você deve voltar à posição inicial lentamente, mantendo a tensão dos músculos em vez de soltar o peso da máquina de uma vez. 

Mantenha o abdômen contraído e a respiração controlada durante a execução do exercício.`,
    gif: require('../assets/gifs/LegPress/abdutora.gif'),
  },
  {
    id: '2',
    title: 'Cadeira Adutora',
    description: `Sente-se na máquina, posicione os pés nos apoios, suba a trava e abra as pernas o quanto for confortável. 
    
    Quanto maior a amplitude, mais desafiador será o movimento. Para o movimento de adução, você deve fazer força empurrando os lados da máquina para dentro, aproximando-os e juntando os joelhos. 
    
    Depois você deve voltar à posição inicial lentamente, mantendo a tensão dos músculos em vez de deixar que a máquina empurre suas pernas para a posição aberta de uma vez.

Mantenha o abdômen contraído e a respiração controlada durante a execução do exercício.`,
    gif: require('../assets/gifs/LegPress/adutora.gif'),
  },
  {
    id: '3',
    title: 'Cadeira Extensora',
    description: `Primeiro, regule a cadeira extensora com a sua altura.
Em seguida, sente-se e certifique que os joelhos estão em cima da dobra do equipamento.

Depois, coloque os pés nas almofadas e, de preferência, na linha do tornozelo.
Lembre-se de manter as solas e as pontas dos pés retas e alinhadas a largura dos ombros.

Escolha a carga que será utilizada, respeitando os seus limites, ou seja, nada de forçar demais.
Com as costas apoiadas no banco, inicie o exercício contraindo as coxas e leve as pernas para cima até que fiquem completamente na altura do quadril, deixando-as completamente esticadas.`,
    gif: require('../assets/gifs/LegPress/extensora.gif'),
  },
  {
    id: '4',
    title: 'Cadeira Flexora',
    description: `Sentar no aparelho, apoiando bem a coluna, os pés devem estar apoiados em cima da almofada, com esta na altura da linha dos tornozelos.

Prestar atenção também ao travar a almofada que apóia na coxa, pois esta deve estar logo acima do joelho.

Flexionar os joelhos até contrair ao máximo o músculo da posterior da coxa.

Retornar lentamente a posição inicial estendendo os joelhos de maneira controlada.

Efetuar o movimento pelo número de repetições previamente estipulada.`,
    gif: require('../assets/gifs/LegPress/flexora.gif'),
  },
  {
    id: '5',
    title: 'Cadeira Leg 45º',
    description: `Apoie totalmente as costas : É importante que todas as suas costas fiquem bem apoiadas na parte de trás da máquina, além disso você deve relaxar o pescoço para não forçar a coluna cervical e desta forma cuidar de suas costas enquanto realiza o movimento.

Dobre suavemente as pernas : Quando você voltar à posição inicial, é importante que você cuidadosamente dobre as pernas e deixe o peso descer, e tente descer o máximo possivel mas evite uma retroveersão pélvica muito acentuada!  

Evite estender totalmente as pernas: Ao estender completamente a articulação no topo de cada repetição, isso simultaneamente reduz a tensão no quadríceps e aumenta o estresse nos joelhos. `,
    gif: require('../assets/gifs/LegPress/leg45.gif'),
  },
];

const LegExercises = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'} Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exercícios de Pernas</Text>
      </View>

      <FlatList
        data={legExercises}
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

export default LegExercises;
