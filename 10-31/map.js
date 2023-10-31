// warning message 제거
// esLint-disable;

import { useState } from "react";
import "./App.css";

function App() {
  let posts = "맛집";

  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);

  let [logo, setLogo] = useState("ReactBlog");
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      {/* <div className="list">
        <h4>{글제목[i]}<span onClick={()=> {greatChange(great+1)}}>좋아요</span>{great} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p> */}
      {/* 
      {글제목.map(function(a, i) {
        return (
          <div className="list">
            <h4>
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...great0];
                  copy[i] = copy[i] + 1;
                  greatChange(copy);
                }}
              >
                좋아요
              </span>
              {great0[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })} */}
      {글제목.map(function(a, i) {
        return (
          <div className="list">
            <h4>
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                👍
              </span>{" "}
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}
      >
        수정버튼
      </button>

      <button
        onClick={() => {
          var newArray = [...글제목];
          newArray = newArray.sort();
          글제목변경(newArray);
        }}
      >
        가나다순정렬
      </button>
      {/* </div> */}

      {/*  배열안에 있는 데이터 수만큼 반복실행함 */}
      {/* 안녕이 3번 반복됨 */}
      {/* {[1, 2, 3].map(function() {
        return <div>안녕</div>;

      })} */}

      {/* 왼쪽 array 자료만큼 내부코드 실행
      return 오른쪽에 있는 걸 array로 담아줌
      유용한파라미터 2개 사용가능 */}

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달창 띄우기
      </button>

      {modal === true ? <Modal></Modal> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
