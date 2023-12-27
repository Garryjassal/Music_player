import React from "react";
import { songtobePlayed } from "./actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {
  faBackward,
  faForward,
  faRetweet,
  faPlay,
  faShare,
  faList,
  faPause,
  faVolumeOff,
  faSave,
  faVolumeUp,
  faVolumeDown,
} from "@fortawesome/fontawesome-free-solid";
import "bootstrap/dist/css/bootstrap.css";

function FooterContainer(props) {
  const { SongPlay } = props;
  //const {isPlayed}=props.SongPlay;
  const PlaypauseClicked = () => {
    SongPlay.isPlayed === false
      ? (SongPlay.isPlayed = true)
      : (SongPlay.isPlayed = false);
    props.dispatch(songtobePlayed(SongPlay));
    console.log("Songplay.isPlayed", props.SongPlay.isPlayed);
  };

  return (
    <div
      style={{
        // backgroundColor:'#000000',
        backgroundImage: "linear-gradient(to left, #414141, #000000)",
        position: "sticky",
        height: "9.4vh",
        overflow: "hidden",
      }}
    >
      <div className="container-fluid m-0 p-0" style={{ height: "9vh" }}>
        <div className="row ">
          <div className="col-2">
            <div className="row py-2 ">
              <div className=" col-md-3 col-sm-1 d-sm-none d-md-flex footer-img ">
                <img
                  src={SongPlay.Image}
                  alt="image"
                  height="50px"
                  width="60px"
                />
              </div>

              <div className=" col-9 ">
                <p className="my-0 text footer-img-desc">
                  {" "}
                  {SongPlay.Songname}
                </p>
                <p className="text " style={{ fontSize: "10px" }}>
                  {" "}
                  {SongPlay.ReleaseDate}
                </p>
              </div>
            </div>
          </div>

          <div className="prop offset-md-2 col-md-4 col-6">
            <div className="row my-2">
              <div className="shuffle offset-1 col-2 extras">
                <FontAwesomeIcon
                  icon={faShare}
                  className="Headphones"
                  style={styles}
                />
              </div>

              <div className="play-button col-2">
                <FontAwesomeIcon
                  icon={faBackward}
                  className="Headphones"
                  style={styles}
                />
              </div>

              <div className="pause-button col-3">
                <FontAwesomeIcon
                  onClick={PlaypauseClicked}
                  icon={SongPlay.isPlayed === true ? faPause : faPlay}
                  className="Headphones"
                  style={styles}
                />
              </div>

              <div className=" col-2">
                <FontAwesomeIcon
                  icon={faForward}
                  className="Headphones"
                  style={styles}
                />
              </div>

              <div className="repeat col-2 extras">
                <FontAwesomeIcon
                  icon={faRetweet}
                  className="Headphones"
                  style={styles}
                />
              </div>
            </div>

            <div className="row scroll-time">
              <div className="col-1 text" style={{ fontSize: "12px" }}>
                0:00
              </div>
              <div className="col-10 sliders ">
                <input
                  type="range"
                  className="slider"
                  style={{ width: "400px" }}
                />
              </div>
              <div className="col-1 text" style={{ fontSize: "12px" }}>
                {SongPlay.Songlength}
              </div>
            </div>
          </div>

          <div className=" offset-md-1 col-md-3 col-sm-4 col-2">
            <div className="row my-3 extra-elements-contain">
              <div
                className="col-7 extras"
                style={{ fontSize: "24px", fontFamily: "Cursive" }}
              >
                <p className=" text"> {SongPlay.Genre}</p>
              </div>
            </div>
          </div>
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

const ConnectedFooterComponent = connect(mapStateToProps)(FooterContainer);
export default ConnectedFooterComponent;
const styles = {
  color: "white",
};
