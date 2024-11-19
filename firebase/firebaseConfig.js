import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBccEgZhzHHi63kMEPwxNVzRXqwwsivGc0",
    databaseURL: "https://app-exercicio-fisico-default-rtdb.firebaseio.com/",
    authDomain: "app-exercicio-fisico.firebaseapp.com",
    projectId: "app-exercicio-fisico",
    storageBucket: "app-exercicio-fisico.appspot.com",
    messagingSenderId: "596386298318",
    appId: "1:596386298318:android:7c096966e5ef0fe980539f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Email de redefinição enviado!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

export { database, ref, get, resetPassword };