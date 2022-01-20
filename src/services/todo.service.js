import { db } from "../utils/firebase";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import { loadUID } from "./auth.service";

const todosCollection = collection(db, "todos");
const currentUserTodos = query(
  todosCollection,
  where("user_id", "==", loadUID())
);

export const getTodos = async () => {
  return await getDocs(currentUserTodos).then((querySnapshot) => {
    const data = [];
    querySnapshot.forEach((element) => {
      data.push({ id: element.id, ...element.data() });
    });
    return data;
  });
};

export const addTodo = async (text) => {
  return await addDoc(todosCollection, {
    user_id: loadUID(),
    text: text,
    comment: "",
    deadline: null,
    completed: false,
  });
};

export const editTodo = async (data) => {
  let { id, ...newData } = data;
  const todoRef = doc(db, "todos", data.id);
  return await getDoc(todoRef).then((document) => {
    document.exists && updateDoc(todoRef, { ...newData });
    return document.data();
  });
};


export const completeTodo = async (id) => {
  const todoRef = doc(db, "todos", id);
  return await getDoc(todoRef).then((document) => {
    document.exists &&
      updateDoc(todoRef, { completed: !document.data().completed });
  });
};

export const completeAll = async () => {
  return await getDocs(currentUserTodos).then((querySnapshot) => {
    querySnapshot.forEach(async (element) => {
      await updateDoc(doc(db, "todos", element.id), {
        completed: !element.data().completed,
      });
    });
  });
};

export const clearCompleted = async () => {
  const q = query(currentUserTodos, where("completed", "==", true));
  return await getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach(async (element) => {
      await deleteDoc(doc(db, "todos", element.id));
    });
  });
};

export const deleteTodo = async (id) => {
  return await deleteDoc(doc(db, "todos", id));
};
