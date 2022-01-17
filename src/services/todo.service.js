import { db } from "../utils/firebase";

export const getTodos = async () => {
  return db
    .collection("todos")
    .get()
    .then((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((element) => {
        data.push({ id: element.id, ...element.data() });
      });
      return data;
    });
};

export const addTodo = async (text) => {
  return await db.collection("todos").add({ text: text, completed: false });
};

export const editTodo = async (id, data) => {
  return await db
    .collection("todos")
    .doc(id)
    .get()
    .then((document) => {
      document.exists && document.ref.update({ text: data });
      return document.data();
    });
};

export const completeTodo = async (id) => {
  return await db
    .collection("todos")
    .doc(id)
    .get()
    .then((document) => {
      document.exists &&
        document.ref.update({ completed: !document.data().completed });
    });
};

export const completeAll = async () => {
  return db
    .collection("todos")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach(async (element) => {
        element.ref.update({ completed: !element.data().completed });
      });
    });
};

export const clearCompleted = async () => {
  return db
    .collection("todos")
    .where("completed", "==", true)
    .get()
    .then((querySnapshot) => {
      console.log(querySnapshot);
      querySnapshot.forEach(async (element) => {
        await db.collection("todos").doc(element.id).delete();
      });
    });
};

export const deleteTodo = async (id) => {
  return await db
    .collection("todos")
    .doc(id)
    .get()
    .then((document) => {
      document.exists && document.ref.delete();
    });
};
