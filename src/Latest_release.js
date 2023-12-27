import React from "react";
import "./index.css";
import { connect } from "react-redux";
import { songtobePlayed, addedtoFavouritesfunction } from "./actions";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisV,
  faPlay,
  faPause,
  faHeart,
} from "@fortawesome/fontawesome-free-solid";

function Latest(props) {
  const { SongDetails, SongPlay } = props;
  if (SongDetails.Songname === SongPlay.Songname) {
    SongDetails.isPlayed = SongPlay.isPlayed;
  } else {
    SongDetails.isPlayed = false;
  }
  const handlePlaySong = () => {
    SongDetails.isPlayed === false
      ? (SongDetails.isPlayed = true)
      : (SongDetails.isPlayed = false);
    props.dispatch(songtobePlayed(props.SongDetails));
  };

  return (
    <div className="p-2 latest-rel-col col-6" style={{ position: "relative" }}>
      <div className="d-flex" style={{ position: "relative" }}>
        <div className="img-container">
          <div className="latest-rel-image">
            <img
              onClick={handlePlaySong}
              src={SongDetails.Image}
              className="d-inline-block playpauseimg"
              alt="..."
              height="150px"
              width="200px"
            />
          </div>

          <div className="playpause">
            <FontAwesomeIcon
              icon={props.SongDetails.isPlayed ? faPause : faPlay}
              style={{ color: "white" }}
            />
          </div>
        </div>

        <div className="d-flex align-items-center ">
          <div className="container-fluid">
            <div className="row">
              <p
                className="my-1 text lat-rel-song"
                style={{ fontFamily: "Cursive", fontSize: "medium" }}
              >
                {SongDetails.Songname}
              </p>
            </div>

            <div className="row date-time text p-1">
              <p>{SongDetails.ReleaseDate}</p>
            </div>
          </div>
        </div>

        <div className="options">
          <div className="dropdown">
            <button
              className="btn lat-rel-side-button"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FontAwesomeIcon icon={faEllipsisV} style={{ color: "white" }} />
            </button>

            <ul className="dropdown-menu">
              <li onClick={handlePlaySong}>
                <span className="p-1">
                  {" "}
                  <FontAwesomeIcon icon={faPlay} />
                </span>
                <span className="p-2"> Play </span>
              </li>{" "}
            </ul>
          </div>
          <p className="date-time">{SongDetails.Songlength}</p>
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    SongPlay: state.SongPlay,
  };
}

const ConnectedLatestComponent = connect(mapStateToProps)(Latest);
export default ConnectedLatestComponent;
