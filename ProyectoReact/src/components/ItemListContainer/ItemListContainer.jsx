import React from "react";

const ItemListContainer = ({ Greeting }) => {
  const GreetingStyles = {
    textAlign: "center",
    fontSize: "30px",
  };
  return <div style={GreetingStyles}> {Greeting}</div>;
};

export default ItemListContainer;
