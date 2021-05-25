import React, { useEffect, useState } from 'react';
import Songs from './Songs';


const AlbumSongs = () => { 
  const [recordings, setRecordings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecordings = async () => { 
      
    const res = await fetch('http://musicbrainz.org/ws/2/recording?release=7d166a44-cfb5-4b08-aacb-6863bbe677d6&fmt=json');

    const recs = await res.json();

    console.log(recs);

    return recs.recordings.map(recording => ({
      title: recording.title,
      releaseDate: recording.first_release_date,
      disambiguation: recording.disambiguation,
      length: recording.length,
      id: recording.id,
      video: recording.video

    }));

  };

  useEffect(() => {
    fetchRecordings().then(setRecordings)
      .finally(() => setLoading(false));
      
  }, []);



  return (
    <div>
      <h2>Recordings</h2>
      <Songs recordings={recordings}
        loading={loading}/>
    </div>
  );
};

AlbumSongs.propTypes = { 

};

export default AlbumSongs;
