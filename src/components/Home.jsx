import React, { useEffect, useState } from "react";

import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  setDoc,
} from "firebase/firestore";

const auth = getAuth(appFirebase);
const db = getFirestore(appFirebase);

const Home = ({ correoUsuario }) => {
  //variables de estado
  const [lista, setLista] = useState([]);

  //funcion para renderizar lista de usuarios
  useEffect(() => {
    const getLista = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        const docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLista(docs);
      } catch (error) {
        console.log(error);
      }
    };
    getLista();
  }, [lista]);

  return (
    <>
      <div>
        Hola usuario <strong>{correoUsuario}</strong>
      </div>
      <button onClick={() => signOut(auth)}>Cerrar Sesión</button>
      <hr />
      <div>
        {lista.map((list) => (
          <div key={list.id}>
            <p>{list.nombre}</p>
            <p>{list.edad}</p>
            <p>{list.profesion}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
