import React from "react";
import ReactDOM from "react-dom/client";

import { List } from "./List";

type TitleProps = {
  name: string;
  year?: number;
  text?: string;
};
function Title(props: TitleProps) {
  return <h1>Hello {props.name}</h1>;
}

const Test = ({ name, text, year = 2023 }: TitleProps) => {
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
      <List />
      <Test
        name="TS"
        text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus nostrum mollitia excepturi quod deserunt numquam architecto nam iusto voluptatibus possimus nulla non vero sed sequi pariatur eveniet, asperiores accusantium odio!"
        
      />
    </div>
  );
};
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
