import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class ArtistCard extends React.Component {
  render() {
    const { SongDetails } = this.props;
    return (
      <div className=" pop-art mx-3 " style={{ width: "fit-content" }}>
        <div className="artist-img-container ">
          <div className="popular-artist-image">
            <img
              src={SongDetails.Image}
              className="rounded-circle d-block mx-auto"
              alt="..."
              height="150px"
              width="150px"
            />
          </div>

          <div className="middle"></div>
        </div>

        <div>
          <p className="artist"> {SongDetails.Artist}</p>
        </div>
      </div>
    );
  }
}

export default ArtistCard;
