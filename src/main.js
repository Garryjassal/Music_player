import React from "react";
import LatestContainer from "./Latest_container";
import Artist from './Popular_artist';
import GenreContainer from "./Genre";
import Mood_songs_container from "./Mood_songs";
import SongsContainer from "./English_Hindi_container";
import './index.css';
import "bootstrap/dist/css/bootstrap.css";


class Main_body extends React.Component {
  render() {
    return( <>

       <LatestContainer/>    {/* Latest Songs */}
       <Artist/>               {/*Popular Artist*/}
       <GenreContainer/>        {/*Genre Contains*/}
       <Mood_songs_container/>   {/*Mood songs Container*/}
       <SongsContainer/>         {/*English hindi songs*/}
     </>
    )
  }
}

export default Main_body;
