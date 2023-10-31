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

      {글제목.map(function(a, i) {
        return (
          <div className="list">
            <h4
              onClick={() => {
                setModal(true);
              }}
            >
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
          setModal(!modal);
        }}
      >
        모달창 띄우기
      </button>

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

      {/*  1. <자식 컴포넌트 작명={state이름}> */}
      {modal == true ? <Modal 글제목변경={글제목변경} 글제목={글제목} /> : null}
    </div>
  );
}

// 부모 -> 자식 state 전송하는법
// 1. <자식 컴포넌트 작명={state이름}>
// 2. props 파라미터 등록 후 props.작명 사용
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.글제목변경(["여자코트 추천", "강남 우동맛집", "파이썬독학"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;
