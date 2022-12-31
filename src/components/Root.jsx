import React, { useEffect } from "react";
import Menu from "./Menu";
import "../style/Root.scss";
import { Outlet } from "react-router-dom";
import { AddContext } from "../context/AddContext";
import { db } from "../firebase";
import {
  collection,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { useState } from "react";

const Root = () => {
  const [lists, setLists] = useState([]);

  const fruitsDB = collection(db, "fruitsDB");

  // fruitsDB를 가져오고나면 setList로 list를 업데이트
  async function getFruitDB() {
    const getList = await getDocs(fruitsDB);
    setLists(getList.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getFruitDB();
  }, []);

  async function listUpdate(data) {
    await setDoc(doc(fruitsDB, data.name), {
      name: data.name,
      season: data.season,
      color: data.color,
      taste: data.taste,
      price: parseInt(data.price),
    });
    getFruitDB();
  }

  const listEdit = async (data) => {
    await updateDoc(doc(fruitsDB, data.name), {
      name: data.name,
      season: data.season,
      color: data.color,
      taste: data.taste,
      price: parseInt(data.price),
    });
    getFruitDB();
  };

  const listDelete = async (data) => {
    await deleteDoc(doc(fruitsDB, data.name));
    getFruitDB();
  };

  return (
    <div className="Root">
      <Menu />

      <AddContext.Provider value={{ lists, listUpdate, listEdit, listDelete }}>
        <Outlet />
      </AddContext.Provider>
    </div>
  );
};

export default Root;
