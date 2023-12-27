import React from "react";
import LatestContainer from "./Latest_container";
import Artist from './Popular_artist';
import GenreContainer from "./Genre";
import Mood_Songs_Container from "./Mood_songs";
import SongsContainer from "./English_Hindi_container";
class MainContainer extends React.Component
{
     render()
    {
        return <div className="col-9 p-0 mainContainer" style={{height:"80.6vh", overflow:"scroll"}}>
       <LatestContainer/>    {/* Latest Songs */}
       <Artist/>               {/*Popular Artist*/}
       <GenreContainer/>        {/*Genre Contains*/}
       <Mood_Songs_Container/>   {/*Mood songs Container*/}
       <SongsContainer/>         {/*English hindi songs*/}
        </div>
    }
}
export default MainContainer;