import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useTitle = initalTitle => {
  const [title, setTitle] = useState(initalTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
