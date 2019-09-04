import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useClick = onClick => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  return element;
};

function App() {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hello</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
