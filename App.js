import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import LegExercises from './screens/LegExercises';
import CostaExercises from './screens/CostaExercises';
import ShoulderExercises from './screens/ShoulderExercises';
import UserProfile from './screens/UserProfile';
import ExerciseDetail from './screens/ExerciseDetail';
import RegisterScreen from './screens/RegisterScreen';
import TricepsExercises from './screens/TricepsExercises';
import BreastplaceExercises from './screens/BreastplateExercises';
import BicepsExercises from './screens/BicepsExercises';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LegExercises" component={LegExercises} />
        <Stack.Screen name="CostaExercises" component={CostaExercises} />
        <Stack.Screen name="ShoulderExercises" component={ShoulderExercises} />
        <Stack.Screen name="BicepsExercises" component={BicepsExercises} />
        <Stack.Screen name="TricepsExercises" component={TricepsExercises} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="BreastplateExercises" component={BreastplaceExercises} />
        <Stack.Screen name="ExerciseDetail" component={ExerciseDetail} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
