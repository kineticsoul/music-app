import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { loadTopAlbums, searchArtists} from '../../actions/appActions'
import HeaderBar from '../../components/header-bar/header-bar';
import SkateboardIcon from './../../assets/skateboarding.gif'
// import AlbumCard from '../components/album-card/album-card';
import './landing-page.scss';


const LandingPage = () => {
  const appState = useSelector(state => state.app);
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');

  const {albums, loading, search_results} = appState;

  useEffect(() => {
    dispatch(loadTopAlbums());
  }, [dispatch]);

function onChange(e){
    const { value } = e.target;
    setQuery(value);

   dispatch(searchArtists(query));
  };


  // return if loading
  if (loading) {
    return(
      <div className='page-wrapper'>
        <div className='header-bar-container'>
          <img className='profile-icon' src='https://e-cdns-images.dzcdn.net/images/user//32x32-000000-80-0-0.jpg' alt='profile icon'/>
          <input type='text' className='search-input' />
        </div>
        <div className='loader'>
            <img src={SkateboardIcon} alt='loader' />
        </div>
      </div>
    )
  }

  if(search_results) {
    if(search_results.data){
      if(search_results.data.length > 0 ){
        return (
          <div className='page-wrapper'>
            <HeaderBar doSearch={onChange}/>
            <div className='content-container'>
                {search_results != null ?
                search_results.data.map((result) => 
                // Need to use component instead
                <Link className='link' to={`/artist/${result.artist.id}`}>
                  <div className='album-card'>
                    <img src={result.album.cover_medium} alt='Album Cover' />
                      <div className='album-details'>
                        <h3 className='album-name'>{result.title}</h3>
                        <h3>{result.artist.name}</h3>
                      </div>
                  </div>
                  </Link>
                ):null}
            </div>
    </div>
  );
      }
    }
  }

  return (
    <div className='page-wrapper'>
      <HeaderBar doSearch={onChange}/>
      <div className='content-container'>
          {albums != null ?
          albums.data.map((album) => 
          // Need to use component instead
          <Link className='link' to={`/artist/${album.artist.id}`}>
            <div className='album-card'>
               <img src={album.cover_medium} alt='Album Cover' />
                <div className='album-details'>
                  <h3 className='album-name'>{album.title}</h3>
                  <h3>{album.artist.name}</h3>
                </div>
            </div>
            </Link>
          ):null}
      </div>
    </div>
  );
}

export default LandingPage;