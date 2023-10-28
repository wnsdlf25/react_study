// css 파일 경로를 import하여 연결한다
import "./App.css";

function App() {
  // 서버 대신 사용하는 변수
  let post = "맛집";

  return (
    // 자바스크립트 파일에서 쓰는 html -> jsx
    // jsx 안에서는 class 대신 className을 사용
    <div className="App">
      <div className="black-nav">
        {/* style을 집어 넣을 때 html은 style="color : red 이런식으로 사용하지만
        jsx는 style={{}}로 사용" */}
        <h4 style={{ color: "red", fontSize: "24px" }}>블로그</h4>
      </div>
      {/* 바닐라 자바스크립트는 변수를 집어넣을때
    document.querySelector('h4').innerHTML = post 식으로 사용하지만
    react는 {}를 사용하여 간결하게 사용한다.
    이러한 방식을 데이터 바인딩이라고 한다.*/}
      <h4>{post}</h4>
    </div>
  );
}

export default App;
