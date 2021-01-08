import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

function navbarMenu() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">MedKube</Navbar.Brand>
      <Nav className="">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>

      <Form inline className="w-50 mx-auto">
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2 w-50"
        />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
}

export default navbarMenu;
