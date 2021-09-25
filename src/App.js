import React from "react";
import "./index.css";
import { Description, Todoform } from "./containers";
import { ToggleTheme } from "./components";

function App() {
  return (
    <div className="container">
      <Description />
      <ToggleTheme />
      <Todoform />
    </div>
  );
}

export default App;
