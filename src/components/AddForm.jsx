import React from "react";
import { useState } from "react";
import "../style/AddForm.scss";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AddContext } from "../context/AddContext";

const AddForm = () => {
  const listUpdate = useContext(AddContext).listUpdate;

  const [item, setItem] = useState({
    name: "",
    season: "",
    color: "",
    taste: "",
    price: "",
  });

  const changeHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const clickHandler = (e) => {
    e.preventDefault();

    if (
      (item.name === "" || item.season === "",
      item.color === "" || item.taste === "" || item.price === "")
    ) {
      return Swal.fire({
        icon: "error",
        text: "모든 항목을 입력해주세요 ✏️",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "success",
        text: "과일 정보가 저장되었습니다 📩",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    listUpdate(item);

    setItem({
      name: "",
      season: "",
      color: "",
      taste: "",
      price: "",
    });
  };

  return (
    <div className="Form">
      <h1>🫐 과일 추가</h1>

      <form>
        <label htmlFor="name">
          <span>이름</span>
          <input
            type="text"
            name="name"
            onChange={changeHandler}
            value={item.name}
          />
        </label>
        <label htmlFor="season">
          <span>계절</span>
          <input
            type="text"
            name="season"
            onChange={changeHandler}
            value={item.season}
          />
        </label>
        <label htmlFor="color">
          <span>색상</span>
          <input
            type="text"
            name="color"
            onChange={changeHandler}
            value={item.color}
          />
        </label>
        <label htmlFor="taste">
          <span>맛</span>
          <input
            type="text"
            name="taste"
            onChange={changeHandler}
            value={item.taste}
          />
        </label>
        <label htmlFor="price">
          <span>가격</span>
          <input
            type="number"
            name="price"
            onChange={changeHandler}
            value={item.price}
          />
        </label>

        <button onClick={clickHandler}>추가</button>
      </form>
    </div>
  );
};

export default AddForm;
