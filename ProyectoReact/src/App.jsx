import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/navbar/navbar";
import Navbar from "./components/navbar/navbar";
import { BsFillCartFill } from "react-icons/bs";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <ItemListContainer Greeting="Hola, este es mi proyecto" />
      </div>
    </>
  );
}

export default App;
