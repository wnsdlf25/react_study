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
  let [title, setTitle] = useState(0);
  let [inputValue, setinputValue] = useState("");

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
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={(e) => {
                  // 이벤트 버블링을 막으려면 e.stopPropagation 을 사용
                  e.stopPropagation();
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
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          setinputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(inputValue);
          글제목변경(copy);
        }}
      >
        글발행
      </button>

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

      {modal == true ? (
        <Modal 글제목변경={글제목변경} 글제목={글제목} title={title} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
