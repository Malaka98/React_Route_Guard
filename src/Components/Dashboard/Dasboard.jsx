import React, { useEffect } from "react";

import { useHistory, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import RouteGuard from "../../Guard";

function Dasboard() {
  const history = useHistory();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  
  let query = useQuery();

  useEffect(() => {
    toast.success("login successful!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }, []);

  function logout() {
    sessionStorage.clear();
    history.push("/login?logout=yes");
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hi {query.get("uname")}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default RouteGuard(Dasboard);
