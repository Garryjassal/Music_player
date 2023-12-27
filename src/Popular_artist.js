import React from "react";
import ArtistCard from "./Artists_card";
import Data from "./data.json";
import "bootstrap/dist/css/bootstrap.css";

class Artist extends React.Component {
  render() {
    return (
      <div style={Popularartists}>
        <h1>Popular Artists</h1>
        <div className="Popular_artists_details p-2" style={{ overflow: "scroll" }}>
          <div style={{ display: "inline-flex" }}>
            {Data.map((SongDetails, index) => {
              return (
                <ArtistCard SongDetails={SongDetails} key={index} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Artist;
const Popularartists = {
  backgroundColor: "#000000",
  color:'white'
};
