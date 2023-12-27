import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Queue_list from "./Queue_list";
import { faHeart, faPlay } from "@fortawesome/fontawesome-free-solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Queue() {
  const [ShowFavourites, setShowFavourites] = useState(false);

  const handleshowFavourites = () => {
    setShowFavourites(true);
  };

  const handleshowPlaylist = () => {
    setShowFavourites(false);
  };

  return (
    <div className="col-3" style={styles.Queue}>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-1">
              <h4 className="p-2 " style={{ fontWeight: "bolder",color:'white' }}>
                {ShowFavourites ? "Favourites" : "Playlist"}
              </h4>
            </div>
            <div className="offset-6 col-2 ">
              <div className="btn-group p-2">
                <button
                  type="button"
                  className="btn dropdown-toggle queue-dropdown "
                  data-bs-toggle="dropdown"
                  data-bs-display="static" style={{color:'white'}}
                >
                  {ShowFavourites ? "Favourites" : "Playlist"}
                </button>
                <ul className="dropdown-menu py-0" style={{ left: -100 }}>
                  <li onClick={handleshowPlaylist}>
                    <a className="dropdown-item" href="#">
                      <span>
                        <FontAwesomeIcon icon={faPlay} />{" "}
                      </span>
                      <span className="p-2"> Playlist </span>
                    </a>
                  </li>
                  <li onClick={handleshowFavourites}>
                    <a className="dropdown-item" href="#">
                      <span>
                        {" "}
                        <FontAwesomeIcon icon={faHeart} />{" "}
                      </span>{" "}
                      <span className="p-2">Favourites</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Queue_list showFavourites={ShowFavourites} />
    </div>
  );
}

export default Queue;
const styles = {
  Queue: {
    height: "80.6vh",
    backgroundColor:' #000000 '
  },
};
