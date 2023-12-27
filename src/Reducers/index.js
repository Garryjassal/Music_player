import {  REMOVE_FROM_FAVOURITES, SONG_PLAY } from "../actions";
import { ADD_TO_FAVOURITES } from "../actions";
import  Data  from "../data.json";

const initialState = {
  initialdata: Data,
  favourites: [],
  SongPlay: {Songname: "Hymn for the weekend",
  ReleaseDate: "25-January-2016",
  Artist: "ColdPlay",
  Genre: "Indie Rock",
  Songlength: "4:18",
  Image: "https://upload.wikimedia.org/wikipedia/en/e/e5/Coldplay%2C_Hymn_for_the_Weekend%2C_Artwork.jpg",
 isPlayed:false ,
  isFavouritesActive:false}
};
export default function Songs(state = initialState, action) {

  switch (action.type) {

    case ADD_TO_FAVOURITES: {
      return {
        ...state,
        favourites: [ ...state.favourites,action.song],
      };
     
    }break;

    case REMOVE_FROM_FAVOURITES:{
    const filteredArray=state.favourites.filter(e=> e.Songname!==action.song.Songname)
    console.log('After removing Favourites are :  ',filteredArray)
     return {
      ...state,
      favourites:filteredArray,
     
     }
    }

    case SONG_PLAY: {
      return {
        ...state,
        SongPlay: {...action.SongDetails},    
      };
    } 
    default:
      return state;
  }
}
