import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  songtobePlayed,
  addedtoFavouritesfunction,
  removefromFavouritesFunction,
} from "./actions";
import "./index.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPause, faPlay } from "@fortawesome/fontawesome-free-solid";
import { connect } from "react-redux";

class ListCard extends React.Component {
  constructor()
  {
    super();
    this.state={favourites:false}
  }

  
  componentDidMount() {
    const { SongDetails, SongPlay } = this.props;
    if (SongDetails.Songname === SongPlay.Songname) {
      SongDetails.isPlayed = SongPlay.isPlayed;
    } else {
      SongDetails.isPlayed = false;
    }
  }


  handleFavouritesSong = () => {
    const { SongDetails, dispatch } = this.props;
    SongDetails.isFavouritesActive = true;
    this.setState({favourites:SongDetails.isFavouritesActive})
    toast.success("Added to favourites", {
      position: "top-left",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
   dispatch(addedtoFavouritesfunction(SongDetails));
  };

  removehandleFavouritesSong = () => {
    const { SongDetails,dispatch } = this.props;
    SongDetails.isFavouritesActive = false;
    this.setState({favourites:SongDetails.isFavouritesActive})
    dispatch(removefromFavouritesFunction(SongDetails));
    toast.warning("Removed from favourites", {
      position: "top-left",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: "light",
    });


  };

  gettingState = () => {
    const { SongDetails, dispatch } = this.props; //passed as props
    SongDetails.isPlayed === false
      ? (SongDetails.isPlayed = true)
      : (SongDetails.isPlayed = false);
    dispatch(songtobePlayed(SongDetails));
  };

  render() {
    const { SongDetails } = this.props;
    return (
      <>
        <li
          className=" list-group-item text p-2 d-flex queue-row"
          style={{ height: "fit-content", backgroundColor: "#000000" }}
         
        >
          <div className="container-fluid queue-list-items">
            <div className="row" >
              <div className="col-3 px-0 playpause_container"  onClick={this.gettingState}>
                <img
                  src={SongDetails.Image}
                  className=" px-1"
                  alt="..."
                  height="50px"
                  width="70px"
                />
                <div id="playpauseFooter"  >
                  <FontAwesomeIcon
                    icon={SongDetails.isPlayed ? faPause : faPlay}
                    style={{ color: "white" }}
                  />
                </div>
              </div>

              <div className="col-8">
                <p className="m-1 d-blok queue-desc-head">
                  {SongDetails.Songname}
                </p>

                <p className="queue-desc mx-1 my-0">{SongDetails.Artist}</p>
              </div>
              <div className=" col-1 heart-dim">
                { SongDetails.isFavouritesActive ? (
                  <FontAwesomeIcon
                    style={{ color: "red" }}
                    onClick={this.removehandleFavouritesSong}
                    icon={faHeart}
                    className="heart"
                  />
                ) : (
                  <FontAwesomeIcon
                    style={{ color: "white" }}
                    onClick={this.handleFavouritesSong}
                    icon={faHeart}
                    className="heart"
                  />
                )}
              </div>
            </div>
          </div>
        </li>
      </>
    );
  }
}


function mapStateToProps(state) {
  return {
    SongPlay: state.SongPlay,
  };
}

const ConnectedQueueComponent = connect(mapStateToProps)(ListCard);
export default ConnectedQueueComponent;
