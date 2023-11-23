import React, { useEffect, useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carrito from "../carrito/carrito";
import { Link } from "react-router-dom";
import axios from "axios";
const NavBarComponent = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Navbar variant="light" expand="lg" className="bg-light">
      <Navbar.Brand>
        <Link to={"/"} style={{ textDecoration: "none", color: "blue" }}>
          PlayStation
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link href="#link">Promamprelo</Nav.Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown">
            {categories.map((category, index) => {
              return (
                <NavDropdown.Item key={index}>
                  <Link
                    to={`/category/${category}`}
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    {category}
                  </Link>
                </NavDropdown.Item>
              );
            })}
          </NavDropdown>
        </Nav>
        <Carrito />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBarComponent;
//<Carrito />
