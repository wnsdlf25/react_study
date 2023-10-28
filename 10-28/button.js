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
            // 원본을 보존하기 위해서 변수를 하나 사용한다
            let copy = [...글제목];
            copy[0] = "여자코트 추천";
            글제목변경(copy);
          }}
        >
          수정버튼
        </button>

        <button
          onClick={() => {
            // 버튼을 누르면 가나다순으로 정렬이됨
            var newArray = [...글제목];
            newArray = newArray.sort();
            글제목변경(newArray);
          }}
        >
          가나다순정렬
        </button>
      </div>
    </div>
  );
}
export default App;
