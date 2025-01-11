import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./useEffect/useBeforeLeave";
// import { App } from "./notHooks/usePreventLeave";
// import { App } from "./notHooks/useConfirm";
// import { App } from "./useRef/useClick";
// import { App } from "./useRef/useRef";
// import { App } from "./useEffect/useTitle";
// import { App } from "./useEffect/useEffect";
// import { App } from "./useState/useTabs";
// import { App } from "./useState/useInput";
// import { App, AppUgly } from "./useState/useState";

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
