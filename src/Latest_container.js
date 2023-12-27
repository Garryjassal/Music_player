import React from "react";
import Latest from "./Latest_release";
import data from "./data.json";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import {store } from ".";

class LatestContainer extends React.Component {
 
  render() {
     return (
              <div
                className="latest container-fluid" style={{height:'330px',overflow:'scroll'}}
              >
                <div className="row">
                  {data.map((SongDetails,index) => {
                    return (
                      <Latest   
                        SongDetails={SongDetails} 
                        dispatch={store.dispatch}
                     key={`Song=${index}`}
                      />
                    );
                  })}
                </div>
              </div>
            );
    }}


export default LatestContainer;
