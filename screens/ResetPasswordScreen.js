import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { resetPassword } from '../firebase/firebaseConfig';

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();

  const handleResetPassword = () => {
    if (email === '') {
      alert('Por favor, insira um email válido.');
      return;
    }

    resetPassword(email);
    alert('Se o e-mail existir, você receberá instruções para redefinir a senha.');
  };

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logoestacio.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Redefinir Senha</Text>
      <TextInput
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity onPress={handleResetPassword} style={styles.button}>
        <Text style={styles.buttonText}>Redefinir Senha</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLogin} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar para o login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f7fc',
  },
  logo: {
    width: 200,
    height: 80,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: '#0071BC',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0071BC',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 10,
  },
  backButtonText: {
    color: '#0071BC',
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
};

export default ResetPasswordScreen;
