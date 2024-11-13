import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import UserScreen from '../screens/UserScreen';
import ExerciseDetail from '../screens/ExerciseDetail';
import LegExercises from './screens/LegExercises'; 
import ArmExercises from './screens/ArmExercises';
import ShoulderExercises from './screens/ShoulderExercises'; 
import CostaExercises from './screens/CostaExercises';
import TricepsExercices  from './screens/TricepsExercices'; 
import CardioExercises from './screens/CardioExercises';
import BreastplaceExercises from './screens/BreastplaceExercises';
import BicepsExercises from './screens/BicepsExercises'; 


const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeTabs">
        <Stack.Screen name="HomeTabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} options={{ title: 'Detalhe do Exercício' }} />
        <Stack.Screen name="User" component={UserScreen} options={{ title: 'Perfil' }} />
        <Stack.Screen name="Exercícios de Perna" component={LegExercises} />
        <Stack.Screen name="ArmExercises" component={ArmExercises} />
        <Stack.Screen name="ShoulderExercises" component={ShoulderExercises} />
        <Stack.Screen name="CostaExercises" component={CostaExercises} />
        <Stack.Screen name="CardioExercises" component={CardioExercises} />
        <Stack.Screen name="BreastplaceExercises" component={BreastplaceExercises} />
        <Stack.Screen name="TricepsExercices" component={TricepsExercices} />
        <Stack.Screen name="Exercícios de Bíceps" component={BicepsExercises} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
