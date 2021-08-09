import { SEARCH_ARTISTS, SET_LOADING, LOAD_TOP_ALBUMS, APP_LAYOUT_ERROR, GET_ARITST, GET_ARTIST_TOP_TRACKS, GET_ARTIST_TOP_ALBUMS } from "../actions/types";


const initialState = {
  search_results: null,
  albums: null,
  artist: null,
  artist_albums: null,
  top_tracks: null,
  error: null,
  loading: true
};


const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_ARTISTS: 
      return {
        ...state,
        search_results: action.payload,
        loading: false,
      }
    case LOAD_TOP_ALBUMS: 
      return {
        ...state,
        albums: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
          ...state,
          loading: true
      }
    case GET_ARITST:
      return {
        ...state,
        artist: action.payload,
        loading: false
      }
    case GET_ARTIST_TOP_TRACKS:
      return {
        ...state,
        top_tracks: action.payload,
        loading: false
      }
    case GET_ARTIST_TOP_ALBUMS:
      return {
        ...state,
        artist_albums: action.payload,
        loading: false
      }
    case APP_LAYOUT_ERROR:
      console.error(action.payload);
      return {
        error: action.payload,
        ...state,
      }
    default: 
      return state;
  }
}

export default reducer;