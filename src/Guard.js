import React, { Component } from "react";

import { Redirect } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";

import "./App.css";

export default function Guard(GuardComponents) {
  return class Guard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        auth: false,
      };
    }

    _checkAndRedirect() {
      let auth = sessionStorage.getItem("isLoading");
      let uName = sessionStorage.getItem("userName");
      let uPass = sessionStorage.getItem("userPass");
      setTimeout(() => {
        if (uName === "root" && uPass === "toor" && auth === "true") {
          this.setState({
            auth: true,
          });
        } else {
          this.setState({
            isLoading: false,
          });
        }
      }, 1500);
    }

    componentDidMount() {
      this._checkAndRedirect();
    }

    render() {
      if (this.state.auth) return <GuardComponents />;

      return this.state.isLoading ? (
        <div className="loading">
          <PulseLoader color={"#4A90E2"} size={50} margin={25} />
          <strong className="loadingtxt">Loading...</strong>
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            search: "?auth=error",
          }}
        />
      );
    }
  };
}
