import React from "react";
import "./styles.css";
import authContext from "../../context/context.js";
import Hey from "./hey";
export default function App() {
  return (
    <authContext.Provider value={{ hey: "HEY" }}>
      <div className="App">
        <Hey />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </authContext.Provider>
  );
}
