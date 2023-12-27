import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
class Genre_names extends React.Component {
  
  render() {
    const{SongDetails}=this.props;
    return (
        <div className="m-4 music-content">
          <img
            src={SongDetails.Image}
            className="rounded-circle music-img"
            alt="..."
            height="100px"
            width="100px"
          />
          <p className="text music-type">{SongDetails.Genre}</p>
        </div>
      
    );
  }
}

export default Genre_names;
