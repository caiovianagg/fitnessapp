import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ExerciseDetail = ({ route }) => {
  const { exercise } = route.params;
  const navigation = useNavigation();

  const [sets, setSets] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const incrementSet = () => setSets(prevSets => prevSets + 1);
  const decrementSet = () => setSets(prevSets => (prevSets > 1 ? prevSets - 1 : 1));

  const startTimer = () => {
    setTimerActive(true);
    const id = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);
    setIntervalId(id);
  };

  const stopTimer = () => {
    setTimerActive(false);
    clearInterval(intervalId);
  };

  const resetTimer = () => {
    setTimerActive(false);
    clearInterval(intervalId);
    setSeconds(0);
  };

  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Botão de Voltar */}
      <View style={styles.backButtonContainer}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>

      {}
      <Image source={exercise.gif} style={styles.exerciseGif} />
      <Text style={styles.exerciseTitle}>{exercise.title}</Text>
      <Text style={styles.exerciseDescription}>{exercise.description}</Text>

      {/* Contador de Séries */}
      <View style={styles.setsContainer}>
        <Text style={styles.setsTitle}>Contador de Séries</Text>
        <View style={styles.counterContainer}>
          <Button title="-" onPress={decrementSet} />
          <Text style={styles.setsText}>{sets}</Text>
          <Button title="+" onPress={incrementSet} />
        </View>
      </View>

      {/* Timer */}
      <View style={styles.timerContainer}>
        <Text style={styles.timerTitle}>Tempo de Descanso</Text>
        <Text style={styles.timerText}>
          {String(Math.floor(seconds / 60)).padStart(2, '0')}:
          {String(seconds % 60).padStart(2, '0')}
        </Text>
        <View style={styles.timerButtons}>
          {timerActive ? (
            <Button title="Parar Tempo" onPress={stopTimer} />
          ) : (
            <Button title="Iniciar Tempo" onPress={startTimer} />
          )}
          <Button title="Resetar Tempo" onPress={resetTimer} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#e0f7ff',
    alignItems: 'center',
    padding: 20,
  },
  backButtonContainer: {
    alignItems: 'center', // Centraliza o botão horizontalmente
    marginVertical: 20, // Adiciona espaçamento acima e abaixo do botão
  },
  exerciseGif: {
    width: 300,
    height: 300,
    marginBottom: 16,
  },
  exerciseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  exerciseDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  setsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  setsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  timerContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  timerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  timerText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%',
  },
});

export default ExerciseDetail;
