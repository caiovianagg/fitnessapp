import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { database, ref, get } from "../firebase/firebaseConfig";

const ExerciseList = ({ navigation, route }) => {
  const [exercises, setExercises] = useState([]);
  const { muscle } = route.params;

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const snapshot = await get(ref(database, `exercises/${muscle}`));
        if (snapshot.exists()) {
          const exerciseArray = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...data,
          }));
          setExercises(exerciseArray);
        } else {
          console.log("Nenhum exercício encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar exercícios:", error);
      }
    };

    fetchExercises();
  }, [muscle]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Exercícios</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.exerciseTitle}>{item.name}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("ExerciseDetails", { exercise: item })}
            >
              <Text style={styles.buttonText}>Ver detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff", 
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#00509E", 
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#ffffff", 
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 4, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  exerciseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00509E", 
    marginBottom: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#00509E",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF", 
    fontSize: 16,
    fontWeight: "600",
  },
});

export default ExerciseList;
