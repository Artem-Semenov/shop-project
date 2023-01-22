import React from "react";
import ReactDOM from "react-dom/client";

function Title() {
  return <h1>Hello Ts</h1>;
}

function Ul() {
  return (
    <>
      <ul>
        <li>List item 1 </li>
        <li>List item 2 </li>
        <li>List item 3 </li>
      </ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in sunt
        tempora ratione, nulla commodi rerum saepe illum ipsum adipisci ipsam,
        optio cupiditate natus aut delectus voluptatum neque eius ad.
      </p>
    </>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  return (
    <div>
      <Title />
      <Ul />
    </div>
  );
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
