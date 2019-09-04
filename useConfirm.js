import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useConfirm = (message = "", onConfirm, onCancel) => {
  if (onConfirm || typeof onConfirm !== "function") {
    return;
  }
  if (onCancel && typeof onCancel !== "function") {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

function App() {
  const deleteWorld = () => console.log("deleting the world");
  const abort = () => console.log("Aborted");

  const confirmDelete = useConfirm("R u sure?", deleteWorld, abort);
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
