import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './album-card.scss';


const AlbumCard = (props) => {
  return (
    <div className='album-card'>
      <img src={props.cover} alt='Album Cover' />
      <div className='album-details'>
        <h3 className='album-name'>{props.title}</h3>
        <h3>{props.artist}</h3>
      </div>
    </div>
  )
}

export default AlbumCard;