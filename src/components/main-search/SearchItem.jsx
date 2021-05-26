import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function SearchItem({ artist }) {
  return (
    <div>
      <h3>{artist.name}</h3>
      <Link to={`/${artist.id}`}>To: {artist.name}</Link>
    </div>
  );
}

SearchItem.propTypes = {
  artist: PropTypes.object
};

export default SearchItem;

