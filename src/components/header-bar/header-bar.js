import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import './header-bar.scss';


const HeaderBar = (props) => {
  function onChange(e) {  props.doSearch(e);}

  return(
    <div className='header-bar-container'>
        <img className='profile-icon' src='https://e-cdns-images.dzcdn.net/images/user//32x32-000000-80-0-0.jpg' alt='profile icon'/>
        <input type='text' className='search-input' placeholder='search'  onKeyDown={onChange}/>
      </div>
  )
}

export default HeaderBar;