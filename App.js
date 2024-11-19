import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ExerciseList from "./components/ExerciseList";
import ExerciseDetails from "./components/ExerciseDetails";
import ResetPasswordScreen from "./screens/ResetPasswordScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ headerTitle: '', headerShown: true }} 
        />
        <Stack.Screen 
          name="ExerciseList" 
          component={ExerciseList} 
          options={{ headerTitle: '', headerShown: true }} 
        />
        <Stack.Screen 
          name="ExerciseDetails" 
          component={ExerciseDetails} 
          options={{ headerTitle: '', headerShown: true }} 
        />
        <Stack.Screen 
          name="ResetPassword" 
          component={ResetPasswordScreen} 
          options={{ headerTitle: '', headerShown: true }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
