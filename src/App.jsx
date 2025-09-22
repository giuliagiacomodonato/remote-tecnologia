import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import MiComponenteTecnologia from "./MiCompTec";

const App = () => (
  <div className="container">
     <MiComponenteTecnologia />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));

  