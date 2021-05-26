import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ handleArtistChange, handleArtistSubmit }) {
  return (
    <div>
      <label htmlFor="artist-input">Search For Artist</label>
      <input type="text" id="artist-input" onChange={handleArtistChange}/>
      <button onClick={handleArtistSubmit}>search!</button>

    </div>
  );
}

SearchBar.propTypes = {
  handleArtistChange: PropTypes.func.isRequired,
  handleArtistSubmit: PropTypes.func.isRequired
};

export default SearchBar;

