import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router';
import SkateboardIcon from './../../assets/skateboarding.gif'
import { getArtist, getArtistTopTacks, getArtistTopAlbums } from '../../actions/appActions';
import './artist-details.scss';
import HeaderBar from '../../components/header-bar/header-bar';


const ArtistDetails = () => {
  let {id} = useParams();
  const appState = useSelector(state => state.app);
  const dispatch = useDispatch();
  
  const {artist_albums, loading, top_tracks, artist} = appState;

  useEffect(() => {
    dispatch(getArtist(id));
    dispatch(getArtistTopTacks(id));
    dispatch(getArtistTopAlbums(id));
  },[dispatch]);

  function getDuration(duration) {
    let seconds = duration % 60;
    let minutes = Math.floor( duration / 60 ) % 60;
    
    seconds = seconds < 10 ? "0"+seconds : seconds;
    minutes = minutes < 10 ? "0"+minutes : minutes;
    
   return minutes+":"+seconds;
  }

  function getReleaseYear(release_date) {
    let tempDate = new Date(release_date);
    
    tempDate = tempDate.getFullYear();

    return tempDate;
  }

  // return if loading
  if (loading) {
    return(
      <div className='page-wrapper'>
        <HeaderBar />
        <div className='loader'>
            <img src={SkateboardIcon} alt='loader' />
        </div>
      </div>
    )
  }

  return(
    <div className='page-wrapper'>
      <HeaderBar />
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

         <div className='cards-container'>
          {artist_albums != null ?
          artist_albums.data.map((album) => 
          // Need to use component instead
            <div className='album-card'>
               <img src={album.cover_medium} alt='Album Cover' />
                <div className='album-details'>
                  <h3 className='album-name'>{album.title}</h3>
                  <p>{getReleaseYear(album.release_date)}</p>
                </div>
            </div>
          ):null}
        </div>
      </div>
    </div>
  );

}

export default ArtistDetails;