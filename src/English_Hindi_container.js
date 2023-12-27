import React from "react";
import "./index.css";
import Data from "./data.json";
import "bootstrap/dist/css/bootstrap.css";
import SongNames from "./English_hindi-songs";

class SongsContainer extends React.Component {
  render() {
    return (
      <div
        className="latest-english d-flex align-items-center"
        style={{ backgroundColor: "#2e2e2e" }}
      >
        <div className="Songs_with_Title"style={{ overflow: "scroll" }}>
          <div className="p-2" style={{ display: "inline-flex" }}>
            {Data.map((song, index) => {
              return <SongNames song={song} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SongsContainer;
