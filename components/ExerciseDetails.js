import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from "react-native";

const ExerciseDetails = ({ route }) => {
  const { exercise } = route.params;

  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);
  const [seriesCount, setSeriesCount] = useState(0);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  if (!exercise) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Carregando detalhes do exercício...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Image source={{ uri: exercise.gifUrl }} style={styles.image} />
      <Text style={styles.description}>{exercise.description}</Text>

      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{formatTime(time)}</Text>
        <TouchableOpacity
          style={styles.timerButton}
          onPress={() => setIsRunning(!isRunning)}
        >
          <Text style={styles.timerButtonText}>
            {isRunning ? "Pausar" : "Iniciar"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.timerButton, { backgroundColor: "#FF4500" }]}
          onPress={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          <Text style={styles.timerButtonText}>Resetar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.seriesContainer}>
        <Text style={styles.seriesText}>Séries realizadas: {seriesCount}</Text>
        <View style={styles.seriesButtons}>
          <TouchableOpacity
            style={styles.seriesButton}
            onPress={() => setSeriesCount((prev) => prev + 1)}
          >
            <Text style={styles.seriesButtonText}>+1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.seriesButton}
            onPress={() => setSeriesCount((prev) => Math.max(0, prev - 1))}
          >
            <Text style={styles.seriesButtonText}>-1</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff", 
    padding: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
  },
  loadingText: {
    fontSize: 18,
    color: "#00509E",
    fontWeight: "bold",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#00509E", 
    marginBottom: 20,
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#333", 
    lineHeight: 24,
    textAlign: "justify",
  },
  timerContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  timerText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#00509E",
    marginBottom: 10,
  },
  timerButton: {
    backgroundColor: "#00509E",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: "50%",
    alignItems: "center",
  },
  timerButtonText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  seriesContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  seriesText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00509E",
    marginBottom: 15,
  },
  seriesButtons: {
    flexDirection: "row",
    gap: 10,
  },
  seriesButton: {
    backgroundColor: "#00509E",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  seriesButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ExerciseDetails;