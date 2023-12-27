import React from "react";
import "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircle,
  faMicrophone,
  faSearch,
} from "@fortawesome/fontawesome-free-solid";
class NavBar extends React.Component {
  render() {
    return ( <nav className="navbar navbar-expand-lg " style={{ top: "0",height:'10vh' }}>
        <div className="container-fluid ">
         
            <div className="icon">
              <div className="icon">
                <div className="icon-content">
                  <img
                    src="https://daily.jstor.org/wp-content/uploads/2023/01/good_times_with_bad_music_1050x700.jpg"
                    alt="logo"
                  />
                </div>
              </div>
            </div>
          

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll"  >
            <ul
              className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            >
              <li className="nav-item">
                <a
                  className="nav-link active mx-5" 
                   >
                  Music App
                </a>
              </li>
            </ul>

            <form className="d-flex form " role="search">
              <FontAwesomeIcon icon={faSearch} className="magnifying-glass" style={{color:'white'}}/>

              <input
                className="form-control me-2 search-bar"
                type="search"
                placeholder="Search"
                style={{
                  background: "none",
                  paddingLeft: "1.75rem",
                  zindex: 0,
                  color:'white'
                }}  
                onChange={(e)=>{ return e.target.value}}
              />
                 <div className="anim">
                 <FontAwesomeIcon icon={faBell} className="bell " style={{color:'white'}} />
                 <FontAwesomeIcon icon={faCircle} className="circle" />
                 </div>

              

              <div id="navbar-img">
                <img
                  src="https://img.freepik.com/free-vector/elegant-musical-notes-music-chord-background_1017-20759.jpg"
                  className="rounded-circle float-end "
                  alt="image"
                  height="50px"
                  width="50px"
                />
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
