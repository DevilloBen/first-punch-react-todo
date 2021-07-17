import React from "react";
import "./index.css";
import { Description, Todoform } from "./containers";

function App() {
  return (
    <div className="container">
      <Description />
      <Todoform />
    </div>
  );
}

export default App;
