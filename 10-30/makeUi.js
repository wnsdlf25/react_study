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
  let [great, greatChange] = useState(0);
  // 2. UI 현재상태를 state로 저장
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
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
      </div>
      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        모달창 띄우기
      </button>
      {/*  3. state에 따라 UI가 어떻게 보일지 작성 */}
      {
        // 조건시 ? 참일때 실행할 코드 : 거짓일 떄 실행할 코드 (삼항연산자)
      }
      {modal === true ? <Modal></Modal> : null}
    </div>
  );
}

// 동적인 UI 만드는 step
// 1. html css미리 디자인 완성
// 2. UI 현재상태를 state로 저장
// 3. state에 따라 UI가 어떻게 보일지 작성

// 1. html css미리 디자인 완성
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
