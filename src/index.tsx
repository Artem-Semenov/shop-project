import React from "react";
import ReactDOM from "react-dom/client";

let a = 10;
console.log(a);

/* const title = React.createElement('h1', {id: 1}, 'Hello React.js');
console.log(title);
 */
const title = <h1>Hello React.js</h1>;

const content = (
  <div>
    {title}
    {a + a}
    <ul className="list">
      <li>list item 1 </li>
      <li>list item 2 </li>
      <li>list item 3 </li>
    </ul>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis libero
      at id, ex, nulla laboriosam corporis quod optio provident iusto
      consectetur porro dignissimos nisi ipsa amet debitis doloremque. Commodi,
      odit!
    </p>
  </div>
);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<React.StrictMode>{content}</React.StrictMode>);
