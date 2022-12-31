import React from "react";
import { useEffect } from "react";
import "../style/List.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AddContext } from "../context/AddContext";

const List = () => {
  const [infoId, setInfoId] = useState("");
  const navigate = useNavigate();
  const lists = useContext(AddContext).lists;

  // 상세정보 클릭
  const clickHandler = (e) => {
    setInfoId(e.target.id);
  };

  useEffect(() => {
    navigate(`/list/${infoId}`);
  }, [infoId, navigate]);

  return (
    <div className="List">
      <h1>📝 전체 상품 리스트</h1>

      <table border="1">
        <thead>
          <tr>
            <td>번호</td>
            <td>이름</td>
            <td>가격</td>
            <td>상세정보</td>
          </tr>
        </thead>
        <tbody>
          {lists.map((data, idx) => (
            <tr key={data.name}>
              <td>{idx + 1}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>
                <button id={parseInt(idx + 1)} onClick={clickHandler}>
                  상세정보
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
