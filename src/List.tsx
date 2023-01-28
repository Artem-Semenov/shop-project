import "./List.css";

type Props = {};

export const List = (props: Props) => {
  const styleObj = {
    color: "red",
    backgroundColor: "aqua",
    padding: "15px",
    fontSize: "20px",
  };
  return (
    <>
      <ul>
        <li>List item 1 </li>
        <li>List item 2 </li>
        <li>List item 3 </li>
        <li>List item 1 </li>
        <li>List item 2 </li>
        <li>List item 3 </li>
      </ul>
      <p style={styleObj}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in sunt
        tempora ratione, nulla commodi rerum saepe illum ipsum adipisci ipsam,
        optio cupiditate natus aut delectus voluptatum neque eius ad.
      </p>
      <p
        style={{
          color: "red",
          backgroundColor: "aqua",
          padding: "15px",
          fontSize: "20px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in sunt
        tempora ratione, nulla commodi rerum saepe illum ipsum adipisci ipsam,
        optio cupiditate natus aut delectus voluptatum neque eius ad.
      </p>
      <p
        className="content"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore in sunt
        tempora ratione, nulla commodi rerum saepe illum ipsum adipisci ipsam,
        optio cupiditate natus aut delectus voluptatum neque eius ad.
      </p>
    </>
  );
};
