export const SONG_PLAY='SONG_PLAY';
export function songtobePlayed(Song)
{
return {
  type:SONG_PLAY,
  SongDetails:Song
    }
}

export const ADD_TO_FAVOURITES='ADD_TO_FAVOURITES';
export function addedtoFavouritesfunction(song)
{
    return{
        type:ADD_TO_FAVOURITES,
       song
    }
}

export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES';
export function removefromFavouritesFunction(song)
{
    return {
        type:REMOVE_FROM_FAVOURITES,
        song
    }
}
