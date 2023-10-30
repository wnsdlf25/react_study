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
      {/* 컴포넌트
      많은 html요소들을 축약해버림
      반복적인  html 축약할 때 편리
      큰페이지들을 만들 때 사용하면 좋음
      자주 변경되는 UI들 만들 떄 사용하면 좋음
      state 가져다쓸 때 문제생김(다른 함수에 있는걸 사용 못함)
      1. function 만들기
      2. return() 안에 html 담기
      3. <함수명> </함수명> 쓰기 */}
      <Modal></Modal>
      {/* <Modal2></Modal2> */}
      {/* 밑에 식으로 사용해도 무방 */}
      {/* <Modal /> */}
    </div>
  );
}
// 다른 함수 밖에다가 만들어야함
// 앞에는 대문자로 만든다
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

// const Modal2 = () => {
//   return (
//     <div className="modal">
//       <h4>제목2</h4>
//       <p>날짜2</p>
//       <p>상세내용2</p>
//     </div>
//   );
// };

export default App;
