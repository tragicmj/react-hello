import React from "react";
import "./style.css";
import Button from "./Button";
const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hello World!</h1>
      <div className="btnWrap">
        <Button title="Play Store" />
        <Button title="App Store" />
        <Button />
        {/* <button className="button">App Store</button>
        <button className="button">Play Store</button> */}
      </div>
    </div>
  );
};

export default App;
