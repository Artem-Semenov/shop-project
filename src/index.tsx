import React from "react";
import ReactDOM from "react-dom/client";


let a = 10;
console.log(a);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<React.StrictMode></React.StrictMode>);
