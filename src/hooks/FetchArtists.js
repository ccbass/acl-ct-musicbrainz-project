import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


function useArtistFetch(artist) {
  const [loading, setLoading] = useState('idle');
  const [offSet, setOffset] = useState(0);
  const [data, setData] = useState(null);
  const [prevArtist, setPrevArtist] = useState(null);

  const changeOffset = (dir) => {
    if(dir === 'DOWN' && offSet > 0){
      setOffset(prevOffset => prevOffset - 10);
    }
    if(dir === 'UP'){
      setOffset(prevOffset => prevOffset + 10);
    }
  }; 

  useEffect(() => {
    setLoading('loading');
    const fetchArtists = async () => {
      // eslint-disable-next-line max-len
      const rawData = await fetch(`https://musicbrainz.org/ws/2/artist?query=${artist}&fmt=json&limit=10&offset=${offSet}`);
      const jsonData = await rawData.json();
      setData(jsonData);
      setPrevArtist(artist);

      setTimeout(() => {
        setLoading('idle');
      }, 250);

    };

    if(artist){
      fetchArtists();
    }
    if(artist !== prevArtist && artist){
      setOffset(0, () => fetchArtists());
    }

  }, [offSet, artist]);


  return { data, loading, offSet, changeOffset };
}


useArtistFetch.propTypes = {
  artist: PropTypes.string,
};


export default useArtistFetch;
