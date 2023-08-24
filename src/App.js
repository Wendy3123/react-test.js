import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("green");
  const newBtnColor = btnColor === "green" ? "blue" : "green";
  const [inputDisabled, setInputDisabled] = useState(false);

  return (
    <div className="App">
      <h1>Testing Playground</h1>
      <button
        style={{ backgroundColor: btnColor }}
        onClick={() => setBtnColor(newBtnColor)}
        disabled={inputDisabled}
      >
        Change to {newBtnColor}
      </button>

      <input
        type="checkbox"
        defaultChecked={inputDisabled}
        onChange={(event) => setInputDisabled(event.target.checked)}
      />
    </div>
  );
}

export default App;
