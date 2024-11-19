import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercícios</Text>

      <TouchableOpacity
        style={styles.profileButton}
        onPress={() => navigation.navigate('Profile')}
      >
        <Image
          source={require('../assets/images/profile.png')}
          style={styles.profileIcon}
        />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ExerciseList', { muscle: 'shoulders' })}
        >
          <Image
            source={require('../assets/images/ombro.jpg')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Ombros</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ExerciseList', { muscle: 'arms' })}
        >
          <Image
            source={require('../assets/images/costa.jpg')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Costas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ExerciseList', { muscle: 'legs' })}
        >
          <Image
            source={require('../assets/images/perna1.jpg')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Pernas</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ExerciseList', { muscle: 'bicep' })}
        >
          <Image
            source={require('../assets/images/biceps.jpg')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Bíceps</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ExerciseList', { muscle: 'triceps' })}
        >
          <Image
            source={require('../assets/images/triceps1.jpg')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Tríceps</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ExerciseList', { muscle: 'breastplate' })}
        >
          <Image
            source={require('../assets/images/peito.jpg')}
            style={styles.buttonImage}
          />
          <Text style={styles.buttonText}>Peito</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0071BC',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    margin: 10,
    width: 120,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
    borderRadius: 25,
  },
  profileButton: {
    position: 'absolute',
    top: 80,
    right: 10,
    backgroundColor: '#0071BC',
    borderRadius: 50,
    padding: 10,
    zIndex: 10,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
});

export default HomeScreen;
