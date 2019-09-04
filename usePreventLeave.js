import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };
  const enablePrevnt = () => window.addEventListener("beforeunload", listener);
  const disablePrevnt = () => window.addEventListener("beforeunload", listener);
  return { enablePrevnt, disablePrevnt };
};

function App() {
  const { enablePrevnt, disablePrevnt } = usePreventLeave();

  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={enablePrevnt}>Protect</button>
      <button onClick={disablePrevnt}>Protect</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
