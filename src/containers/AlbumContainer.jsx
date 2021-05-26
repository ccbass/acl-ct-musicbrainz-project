import React, {useState, useEffect} from 'react';
import AlbumList from '../components/presentations/AlbumList';
import {getAlbums} from '../components/services/MusicBrainzApi';
import { useParams } from 'react-router-dom';




function AlbumContainer() {

  const [albums, setAlbum] = useState([])
  
  const [loading, setLoading] = useState(true)

  const { artist } = useParams()


  useEffect(() => { 
      getAlbums(artist)
        .then(setAlbum)
        .finally(() => 
          setLoading(false)
        )
  }, []) 

  return (
    <div>
      <AlbumList album={albums} loading={loading}/>
    </div>
  );
}

export default AlbumContainer;