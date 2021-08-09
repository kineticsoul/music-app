import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { loadTopAlbums } from '../actions/appActions'
import SkateboardIcon from './../assets/skateboarding.gif'
// import AlbumCard from '../components/album-card/album-card';
import './landing-page.scss';


const LandingPage = () => {

  const appState = useSelector(state => state.app);
  const dispatch = useDispatch();

  const {albums, loading} = appState;

  useEffect(() => {
    dispatch(loadTopAlbums());
  }, [dispatch]);

  // return if loading
  if (loading) {
    return(
      <div className='landing-page-wrapper'>
        <div className='header-bar-container'>
          <img className='profile-icon' src='https://e-cdns-images.dzcdn.net/images/user//32x32-000000-80-0-0.jpg' alt='profile icon'/>
          <input type='text' className='search-input'/>
        </div>
        <div className='loader'>
            <img src={SkateboardIcon} alt='loader' />
        </div>
      </div>
    )
  }

  return (
    <div className='landing-page-wrapper'>
      <div className='header-bar-container'>
        <img className='profile-icon' src='https://e-cdns-images.dzcdn.net/images/user//32x32-000000-80-0-0.jpg' alt='profile icon'/>
        <input type='text' className='search-input' placeholder='search'/>
      </div>

      <div className='content-container'>
          {albums.data.map((album) => 
          // Need to use component instead
            <div className='album-card'>
               <img src={album.cover_medium} alt='Album Cover' />
                <div className='album-details'>
                  <h3 className='album-name'>{album.title}</h3>
                  <h3>{album.artist.name}</h3>
                </div>
            </div>
          )}
      </div>
    </div>
  );
}

export default LandingPage;