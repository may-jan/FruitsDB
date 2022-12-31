import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="HomeTab_container">
        <div>
          <div>
            전체 상품 리스트
            <br />
            조회 및 수정 제거
          </div>
          <Link to="/list">리스트 바로가기 ► &nbsp;</Link>
        </div>
        <div>
          <div>직접 추가</div>
          <Link to="/addform">추가 바로가기 ► &nbsp;</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
