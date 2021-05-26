import React from 'react';
import PropTypes from 'prop-types';
import SearchItem from './SearchItem';


function SearchList({ data: { artists } }) {
  return (
    <div>
      {artists.map(artist => 
        <div key={artist.id}>
          <SearchItem artist={artist} />
        </div>
      )}
      
    </div>
  );
}

SearchList.propTypes = {
  data: PropTypes.object,
};


export default SearchList;

