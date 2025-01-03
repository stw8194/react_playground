import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./useInput";
// import { App, AppUgly } from "./useState";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

// root.render(
//   <React.StrictMode>
//     <AppUgly />
//     <App />
//   </React.StrictMode>
// );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
