import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
// import AppTest from "./Apptest";

const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
ReactDOM.render(
  <React.StrictMode>
    <App />,{/* <AppTest />, */}
  </React.StrictMode>,
  rootElement
);
