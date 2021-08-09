import { SEARCH_ARTISTS, LOAD_TOP_ALBUMS, APP_LAYOUT_ERROR } from "./types";
import axios from 'axios';

//To avoid CORS errors
let baseUrl = 'https://cors-anywhere.herokuapp.com/';

//function to search artists
export const searchArtists = (searchTerm) => async dispatch => {

  const fullUrl = baseUrl + 'https://api.deezer.com/search?q=' + searchTerm;
  try {    
    const response  = await axios.get(fullUrl);

    dispatch({
      type: SEARCH_ARTISTS,
      payload: response.data
    })

  } catch (error) {
    dispatch({
      type: APP_LAYOUT_ERROR,
      payload: error
    })
  }
}

//function to load charts
export const loadTopAlbums = () => async dispatch => {
  
  const fullUrl = baseUrl + 'https://api.deezer.com/chart/0/albums';
  try {
    const response =  await axios.get(fullUrl);

    dispatch({
      type: LOAD_TOP_ALBUMS,
      payload: response.data
    })

  } catch(error) {
    dispatch({
      type: APP_LAYOUT_ERROR,
      payload: error
    })
  }
}

