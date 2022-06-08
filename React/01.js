import "./styles.css";

const App = () => {
  const itemOne = "React를";
  const itemTwo = "배우고 있습니다.";

  return (
    <div className="App">
      {/* Learn 컴포넌트에 itemOne 과 itemTwo 를
      props 로 전달하세요 */}
      <Learn>{itemOne} {itemTwo}</Learn>
    </div>
  );
};

const Learn = (props) => {
  // 전달받은 props 를 아래 <div> tag 사이에 사용하여
  // "React를 배우고 있습니다" 라는 문장이 렌더링되도록 컴포넌트를 완성하세요
  return <div className="Learn">{props.children}</div>;
};

export default App;






//////////////////////////

import React, { useState } from "react";
import "./styles.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(showPopup => !showPopup);
  };

  return (
    <div className="App">
      <h1>Fix me to open Pop Up</h1>
      {/* 버튼을 클릭했을 때 Pop up 의 open/close 가 작동하도록
          button tag를 완성하세요. */}
      <button className="open" onClick={togglePopup}>Open me</button>
      {showPopup ? (
        <div className="popup">
          <div className="popup_inner">
            <h2>Success!</h2>
            <button className="close" onClick={togglePopup}>
              Close me
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
