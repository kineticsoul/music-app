import { SEARCH_ARTISTS, SET_LOADING, LOAD_TOP_ALBUMS, APP_LAYOUT_ERROR } from "../actions/types";


const initialState = {
  search_results: null,
  albums: null,
  artist: null,
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