import React from "react";
import Queue from "./aside";
import "bootstrap/dist/css/bootstrap.css";
import MainContainer from "./mainbody_container";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

class Body extends React.Component {
  render() {
    return (
      <div
        className="container-fluid Body"
        style={{ height: "80.6vh" }}
      >
        <div className="row">
          <MainContainer />
          <Queue  className="Queue" />
        </div>
      </div>
    );
  }
}

export default Body;

