import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

class SongNames extends React.Component {
  constructor(props)
  {
    super(props);
  }
  render() {
    
    return (
      <div className="m-2 p-2 my-5 eng-hin-artist ">
        <img
          src={this.props.song.Image}
          className="d-block  eng-hin-img "
          alt="..."
          height="150px"
          width="150px"
        />

        <p className="artist-name start-50 m-0 p-0">{this.props.song.Songname}</p>
        <p className="date">{this.props.song.ReleaseDate}</p>
      </div>
    );
  }
}

export default SongNames;
