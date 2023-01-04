import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.scss";
import fruitImg from "./../assets/images/fruits.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home_left">
        <p>원하는 과일을 마음대로,</p>
        <p>수정하고 삭제하고 추가까지!</p>

        <div className="linkTab">
          <Link to="/list">전체 상품 리스트 ▶</Link>
          <Link to="/addform">과일 추가하기 ▶</Link>
        </div>
      </div>
      <div className="Home_right">
        <img src={fruitImg} alt="fruitImg" />
      </div>
    </div>
  );
};

export default Home;
