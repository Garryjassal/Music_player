import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Mood_image extends React.Component
{
   render()
   {
    return <>
    <div className="col-md-3 col-8 mx-auto my-2 my-sm-1 imgzoom p-0">
              <img src={this.props.Image} alt="...." height="100%" width="100%" />
              <p className="inside-zoom-text"></p>
            </div>
    </>
   }
}

export default Mood_image;