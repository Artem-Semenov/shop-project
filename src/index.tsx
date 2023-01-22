import React from "react";
import ReactDOM from "react-dom/client";

type TitleProps = {
  name: string;
  year?: number;
  text?: string;
};
function Title(props: TitleProps) {
  return <h1>Hello {props.name}</h1>;
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


const Test = ({name, text, year}: TitleProps) => {
  return (
    <>
      <h1>Year: {year}</h1>
      <h2>{name}</h2>
      <p>{text}</p>
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => {
  return (
    <div>
      <Title name="App" />
      <Title name="React" />
      <Title name="Ts" />
      <Ul />
      <Test 
      name="TS"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nostrum mollitia excepturi quod deserunt numquam architecto nam iusto voluptatibus possimus nulla non vero sed sequi pariatur eveniet, asperiores accusantium odio!"
      year={2022} />
    </div>
  );
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
