import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logoestacio.png')}
        style={styles.logo}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Registrar-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 30,
  },
  input: {
    width: '80%',
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#0071BC',
    borderRadius: 8,
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '80%',
    backgroundColor: '#0071BC',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  link: {
    color: '#0071BC',
    fontSize: 16,
    marginVertical: 5,
  },
});

export default LoginScreen;
