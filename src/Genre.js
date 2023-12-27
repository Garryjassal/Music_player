import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/fontawesome-free-solid";
import Data from "./data.json";
import "bootstrap/dist/css/bootstrap.css";
import Genre_names from "./Genre_names";
class GenreContainer extends React.Component {
  render() {
    return (
      <div style={Genre_style}>
        {" "}
        <h1>Genre</h1>
        <div className=" d-flex align-items-center">
          <div className="station-divs p-2">
            <div className="divs p-2">
              <div className="div1"></div>
              <div className="div2"></div>
              <div className="div3">
                <div className="div4">
                  <FontAwesomeIcon icon={faHeadphones} className="Headphones" />
                  <h3> Stations </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="Genre_details" style={{ overflow: "scroll", width: "1000px" }}>
            <div style={{ display: "inline-flex" }}>
              {Data.map((SongDetails, index) => {
                return <Genre_names SongDetails={SongDetails} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenreContainer;
const Genre_style = { backgroundColor: " #2e2e2e",color:'white'};
