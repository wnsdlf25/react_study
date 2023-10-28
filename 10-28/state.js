import { useState } from "react";
import "./App.css";

function App() {
  let posts = "맛집";
  // state 는 자료를 저장한다
  // 1. import{ useState}
  // 2. useState(보관할 자료)
  // 3. let[작명, 작명]
  // a 는 state 보관한 자료가 나옴
  // b 는 state 변경을 도와줌
  // state 는 변수와 달리 자동 재렌더링이된다.
  // 변경이 잘 안되는건 그냥 하드코딩이나 변수를 사용한다
  // 자주 변경되는 요소들을 state 사용한다
  let [a, b] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [logo, setLogo] = useState("ReactBlog");

  // return 안에는 병렬로 태그 2개 이상 기입 금지
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{a[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}
export default App;
