import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import profileIcon from '../assets/profile.png'; 
import HomeStyles from '../styles/HomeStyles';

import legsImage from '../assets/images/perna1.jpg'; 
import armsImage from '../assets/images/triceps1.jpg'; 
import shouldersImage from '../assets/images/ombro1.jpg'; 
import costaImage from '../assets/images/costa.jpg';
import tricepsImage from '../assets/images/triceps1.jpg';
import bicepsImage from '../assets/images/biceps.jpg';
import breastplateImage from '../assets/images/peito.jpg';


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treinos</Text>

      <TouchableOpacity
  style={[HomeStyles.profileButton, { marginTop: 20 }]} 
  onPress={() => navigation.navigate('UserProfile')}
>
  <Image source={profileIcon} style={{ width: 30, height: 30 }} />
</TouchableOpacity>


      <View style={HomeStyles.buttonContainer}>
        <TouchableOpacity
          style={HomeStyles.exerciseButton}
          onPress={() => navigation.navigate('LegExercises')}
        >
          <Text style={HomeStyles.buttonText}>Pernas</Text>
          <Image source={legsImage} style={HomeStyles.exerciseImage} />
        </TouchableOpacity>

        <TouchableOpacity
          style={HomeStyles.exerciseButton}
          onPress={() => navigation.navigate('TricepsExercises')}
        >
          <Text style={HomeStyles.buttonText}>Tríceps</Text>
          <Image source={armsImage} style={HomeStyles.exerciseImage} />
        </TouchableOpacity>
      </View>

      <View style={HomeStyles.buttonContainer}>
        <TouchableOpacity
          style={HomeStyles.exerciseButton}
          onPress={() => navigation.navigate('ShoulderExercises')}
        >
          <Text style={HomeStyles.buttonText}>Ombros</Text>
          <Image source={shouldersImage} style={HomeStyles.exerciseImage} />
        </TouchableOpacity>

        <TouchableOpacity
          style={HomeStyles.exerciseButton}
          onPress={() => navigation.navigate('CostaExercises')}
        >
          <Text style={HomeStyles.buttonText}>Costas</Text>
          <Image source={costaImage} style={HomeStyles.exerciseImage} />
        </TouchableOpacity>
      </View>

      <View style={HomeStyles.buttonContainer}>
        <TouchableOpacity
          style={HomeStyles.exerciseButton}
          onPress={() => navigation.navigate('BicepsExercises')}
        >
          <Text style={HomeStyles.buttonText}>Bíceps</Text>
          <Image source={bicepsImage} style={HomeStyles.exerciseImage} />
        </TouchableOpacity>

        <TouchableOpacity
          style={HomeStyles.exerciseButton}
          onPress={() => navigation.navigate('BreastplateExercises')}
        >
          <Text style={HomeStyles.buttonText}>Peito</Text>
          <Image source={breastplateImage} style={HomeStyles.exerciseImage} />
        </TouchableOpacity>
      </View>
    </View>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00509d', 
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#00509d', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    borderWidth: 0, 
    },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  exerciseButton: {
    alignItems: 'center',
    backgroundColor: '#00509d', 
    padding: 15,
    borderRadius: 10,
    width: '40%',
    marginBottom: 15,
    borderWidth: 0, 
  },
  exerciseImage: {
    width: 100,
    height: 100,
    marginTop: 10,
    borderRadius: 10,
  },
});

export default HomeScreen;
