import { auth } from "../utils/firebase";
import {
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const signin = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const signup = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res.user;
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const sendPasswordResetEmail = async (auth, email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const signout = async () => signOut(auth);

export const isAuthenticated = () => {
  return loadUID() ? true : false;
};

export const loadUID = () => {
  try {
    return JSON.parse(JSON.parse(localStorage.getItem("persist:auth")).auth)
      .user.uid;
  } catch (error) {
    return null;
  }
};
