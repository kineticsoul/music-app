import { SEARCH_ARTISTS, LOAD_TOP_ALBUMS, APP_LAYOUT_ERROR, GET_ARITST, GET_ARTIST_TOP_TRACKS, SET_LOADING, GET_ARTIST_TOP_ALBUMS } from "./types";
import axios from 'axios';

//To avoid CORS errors
let baseUrl = 'https://thingproxy.freeboard.io/fetch/';

//function to search artists
export const searchArtists = (searchTerm) => async dispatch => {

  setLoading();
  const fullUrl = baseUrl + 'https://api.deezer.com/search?q=' + searchTerm;
  console.log('Search Term is: ', searchTerm);
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
  
  setLoading();
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

//Get artist from clicked card
export const getArtist = (id) => async dispatch => {

  setLoading();
  const fullUrl = baseUrl + 'https://api.deezer.com/artist/' + id;
  try {
    const response =  await axios.get(fullUrl);

    dispatch({
      type: GET_ARITST,
      payload: response.data
    })

  } catch(error) {
    dispatch({
      type: APP_LAYOUT_ERROR,
      payload: error
    })
  }
}


//Get top 5 tracks from artist
export const getArtistTopTacks = (id) => async dispatch => {

  setLoading();
  const fullUrl = baseUrl + 'https://api.deezer.com/artist/' + id + '/top?limit=5';
  try {
    const response =  await axios.get(fullUrl);

    dispatch({
      type: GET_ARTIST_TOP_TRACKS,
      payload: response.data
    })

  } catch(error) {
    dispatch({
      type: APP_LAYOUT_ERROR,
      payload: error
    })
  }
}

//Get top 5 albums from artist
export const getArtistTopAlbums = (id) => async dispatch => {

  setLoading();
  const fullUrl = baseUrl + 'https://api.deezer.com/artist/' + id + '/top?limit=5';
  try {
    const response =  await axios.get(fullUrl);

    dispatch({
      type: GET_ARTIST_TOP_ALBUMS,
      payload: response.data
    })

  } catch(error) {
    dispatch({
      type: APP_LAYOUT_ERROR,
      payload: error
    })
  }
}


//Set loading to true
export const setLoading = () => async dispatch => {
    dispatch({
        type: SET_LOADING
    });
}

