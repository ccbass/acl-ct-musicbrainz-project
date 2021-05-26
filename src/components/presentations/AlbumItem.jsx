import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Albums.css';


const AlbumItem = ({title, date, quality, id}) => {

  return (
    <div className={style.box}>
      <Link exact="true" activeclassname="selected" to={`/:artist/:release`}>
      <h1>{title}</h1>
      </Link> 
      <img src={`http://coverartarchive.org/release/${id}/front`}/>
      <p>Release Date:{date}</p>
      <p>Quality: {quality}</p>
    </div>
  );
    
};

AlbumItem.propTypes = { 
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  quality: PropTypes.string.isRequired,

};

export default AlbumItem;