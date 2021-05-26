import React, { useState } from 'react';
import SearchBar from '../components/main-search/SearchBar';
import SearchControls from '../components/main-search/SearchControls';
import SearchList from '../components/main-search/SearchList';
import useArtistFetch from '../hooks/FetchArtists';

function SearchContainer() {
  const [artist, setArtist] = useState(null);
  const [newSearch, setNewSearch] = useState(null);
  const { data, loading, offSet, changeOffset } = useArtistFetch(artist);

  const handleArtistChange = (e) => {
    setNewSearch(e.target.value);
  };

  const handleArtistSubmit = () => {
    setArtist(newSearch);
  };

  return (
    <div>
      <SearchBar 
        handleArtistChange={handleArtistChange} 
        handleArtistSubmit={handleArtistSubmit}
      />
      {data && 
        <SearchControls data={data} 
          offSet={offSet} 
          changeOffset={changeOffset} />}

      {loading === 'loading' && !artist && <h1>Search for results:</h1>}
      {loading === 'loading' && artist && <h1>L O A D I N G</h1>}
      {loading === 'idle' && data && <SearchList data={data} />}

    </div>
  );
}

export default SearchContainer;
