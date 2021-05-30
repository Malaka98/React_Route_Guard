import React, { useEffect, useCallback } from "react";

import { Form, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useHistory, useLocation } from "react-router-dom";

import "./style.css";

export default function LogingPage() {
  let uName, uPass;

  const history = useHistory();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();

  const displayerror = useCallback(() => {
    if (query.get("auth") === "error") {
      toast.error("🦄 Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => {
          sessionStorage.clear();
        },
      });
    }
    if (query.get("logout") === "yes") {
      toast.info("Logout successfully!", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [query]);

  useEffect(() => {
    displayerror();
  }, [displayerror]);

  function login(e) {
    e.preventDefault();

    uName = e.target.uname.value;
    uPass = e.target.pass.value;

    history.push(`/dashboard?uname=${uName}`);

    // console.log(e.target.uname.value);
    // console.log(e.target.pass.value);
    sessionStorage.setItem("isLoading", "true");
    sessionStorage.setItem("userName", uName);
    sessionStorage.setItem("userPass", uPass);
  }

  return (
    <div className="loginpage">
      <div className="loginform">
        <Form onSubmit={login}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control name="uname" type="text" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="pass" type="password" placeholder="Password" />
          </Form.Group>
          <div className="formbtn">
          <Button variant="primary" type="submit" className="flex-item1">
            LogIn
          </Button>
          <Link to="/regpage" className="flex-item2">SingUp</Link>
          </div>
        </Form>
      </div>
      <ToastContainer />
    </div>
  );
}
