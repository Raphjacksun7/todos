import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.FIREBASE_SENDER_ID,
//   appId: process.env.FIREBASE_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyA1-MehdxljpgOhB82eMI4CmO9xLU90Tvc",
  authDomain: "nice-todo-app.firebaseapp.com",
  projectId: "nice-todo-app",
  storageBucket: "nice-todo-app.appspot.com",
  messagingSenderId: "827530707173",
  appId: "1:827530707173:web:403da405009dac96b6540c"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export const config = {
  todos: "todos",
  users: "users",
};

export default firebase;
