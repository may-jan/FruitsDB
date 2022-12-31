import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AddContext } from "../context/AddContext";
import "../style/ListInfo.scss";
import Swal from "sweetalert2";
import { FaArrowLeft } from "react-icons/fa";

const ListInfo = () => {
  const { infoId } = useParams();
  const lists = useContext(AddContext).lists;
  const listEdit = useContext(AddContext).listEdit;
  const listDelete = useContext(AddContext).listDelete;

  const [item, setItem] = useState(lists[parseInt(infoId) - 1]);

  // input changeHandler
  const changeHandler = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  // editHandler
  const editHandler = (e) => {
    e.preventDefault();
    if (
      item.name === "" ||
      (item.season === "") | (item.color === "") ||
      item.taste === "" ||
      item.price === ""
    ) {
      return Swal.fire({
        icon: "error",
        text: "모든 항목을 입력해주세요 ✏️",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    Swal.fire({
      text: "수정하시겠습니까?",
      icon: "question",
      showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
      reverseButtons: false, // 버튼 순서 거꾸로
      confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
      cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
      confirmButtonText: "네", // confirm 버튼 텍스트 지정
      cancelButtonText: "아니오", // cancel 버튼 텍스트 지정
    }).then((result) => {
      // 만약 Promise리턴을 받으면,
      if (result.isConfirmed) {
        // confirm 버튼을 눌렀다면
        Swal.fire({
          icon: "success",
          text: "수정이 완료되었습니다",
          showConfirmButton: false,
          timer: 1500,
        });
        listEdit(item);
        window.history.go(-1);
      } else if (result.isDismissed) {
        // cancle 버튼을 눌렀다면
        Swal.fire({
          icon: "success",
          text: "수정이 취소 되었습니다",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // removeHandler
  const deleteHandler = (e) => {
    e.preventDefault();

    Swal.fire({
      text: "정말 삭제하시겠습니까?",
      icon: "question",
      showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
      reverseButtons: false, // 버튼 순서 거꾸로
      confirmButtonColor: "#3085d6", // confrim 버튼 색깔 지정
      cancelButtonColor: "#d33", // cancel 버튼 색깔 지정
      confirmButtonText: "네", // confirm 버튼 텍스트 지정
      cancelButtonText: "아니오", // cancel 버튼 텍스트 지정
    }).then((result) => {
      // 만약 Promise리턴을 받으면,
      if (result.isConfirmed) {
        // confirm 버튼을 눌렀다면
        Swal.fire({
          icon: "success",
          text: "삭제가 완료되었습니다",
          showConfirmButton: false,
          timer: 1500,
        });
        listDelete(item);
        window.history.go(-1);
      } else if (result.isDismissed) {
        // cancle 버튼을 눌렀다면
        Swal.fire({
          icon: "success",
          text: "삭제가 취소 되었습니다",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  // 뒤로가기
  const backHandler = (e) => {
    e.preventDefault();
    window.history.go(-1);
  };

  return (
    <div className="ListInfo">
      <h1>{infoId} 번 상세페이지</h1>

      <div className="listInfo_wrap">
        <label htmlFor="num">
          <span>상품번호</span>
          <input
            type="text"
            name="num"
            onChange={changeHandler}
            value={infoId}
          />
        </label>
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
            type="text"
            name="price"
            onChange={changeHandler}
            value={item.price}
          />
        </label>

        <div className="btn_wrap">
          <button onClick={editHandler}>수정</button>
          <button onClick={deleteHandler}>제거</button>
        </div>
      </div>

      <button className="back_btn" onClick={backHandler}>
        <FaArrowLeft />
      </button>
    </div>
  );
};

export default ListInfo;
