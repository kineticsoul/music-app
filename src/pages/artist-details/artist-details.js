import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router';
import SkateboardIcon from './../../assets/skateboarding.gif'
import { getArtist, getArtistTopTacks } from '../../actions/appActions';
import './artist-details.scss';


const ArtistDetails = () => {
  let {id} = useParams();
  const appState = useSelector(state => state.app);
  const dispatch = useDispatch();

  
  const {albums, loading, top_tracks, artist} = appState;

  useEffect(() => {
    dispatch(getArtist(id));
    dispatch(getArtistTopTacks(id));
  },[dispatch]);

  function getDuration(duration) {
    let seconds = duration % 60;
    let minutes = Math.floor( duration / 60 ) % 60;
    
    seconds = seconds < 10 ? "0"+seconds : seconds;
    minutes = minutes < 10 ? "0"+minutes : minutes;
    
   return minutes+":"+seconds;
  }

  // return if loading
  if (loading) {
    return(
      <div className='loader'>
          <img src={SkateboardIcon} alt='loader' />
      </div>
    )
  }

  return(
    <div className='landing-page-wrapper'>
      <div className='header-bar-container'>
        <img className='profile-icon' src='https://e-cdns-images.dzcdn.net/images/user//32x32-000000-80-0-0.jpg' alt='profile icon'/>
        <input type='text' className='search-input' placeholder='search'/>
      </div>

      <div className='content-container'>
         <div className='top-tracks-container'>
          {artist != null ? 
           <div className='artist-cover'>
              <div className='artist-titles'>
                <h3>{artist.name}</h3>
                <p>{artist.nb_fan} fans</p>
              </div>
                <img src={artist.picture_medium} alt='Artist Cover Image' />
           </div> : null
                }
           <div className='top-tracks-details'>
             <h3> Top tracks</h3>

             <ol>
              {top_tracks != null ? 
                top_tracks.data.map((track) => 
                  <li>
                    <div className='track-row'>
                      <span>{track.title}</span> 
                      <span>{getDuration(track.duration)}</span>
                    </div>
                  </li>
                ) : null }
             </ol>
           </div>
         </div>
      </div>
    </div>
  );

}

export default ArtistDetails;