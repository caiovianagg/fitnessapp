import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Importa o método para acessar o Realtime Database
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from 'firebase/auth'; // Para autenticação, se necessário
import { signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBccEgZhzHHi63kMEPwxNVzRXqwwsivGc0",
    databaseURL: "https://app-exercicio-fisico-default-rtdb.firebaseio.com/",
    authDomain: "app-exercicio-fisico.firebaseapp.com",
    projectId: "app-exercicio-fisico",
    storageBucket: "app-exercicio-fisico.appspot.com",
    messagingSenderId: "596386298318",
    appId: "1:596386298318:android:7c096966e5ef0fe980539f",
};

const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Navegue para a próxima tela se o login for bem-sucedido
    } catch (error) {
      alert("Email ou senha incorretos. Tente novamente.");
    }
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database, createUserWithEmailAndPassword, sendPasswordResetEmail };
