/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import AlbumList from '../components/presentations/AlbumList';
import { getAlbums } from '../components/services/MusicBrainzApi';
import { useParams } from 'react-router-dom';

function AlbumContainer() {
    const [albums, setAlbum] = useState([]);
    const [loading, setLoading] = useState(true);
    const [offSet, setOffset] = useState(0);
    const [count, setCount] = useState();
    const { artist } = useParams();
    const disableLow = offSet === 0 ? true : false;
    const disableHigh = offSet > count - 25 ? true : false;

    const changeOffset = (dir) => {
        if (dir === 'DOWN' && offSet > 0) {
            setOffset((prevOffset) => prevOffset - 25);
        }
        if (dir === 'UP') {
            setOffset((prevOffset) => prevOffset + 25);
        }
    };

    useEffect(() => {
        getAlbums(artist, offSet)
            .then((response) => {
                setAlbum(response.array);
                setCount(response.totalCount);
            })
            .finally(() => setLoading(false));
    }, [offSet]);

    return (
        <div>
            <nav>
                <p>Current Page: {offSet / 25 + 1} of {Math.ceil(count / 25)}</p>
                <button disabled={disableLow} onClick={() => changeOffset('DOWN')}>Previous</button>
                <button disabled={disableHigh} onClick={() => changeOffset('UP')}>Next</button>
            </nav>
            {loading ? <h1>LOADING...</h1> : <AlbumList album={albums} />}
        </div>
    );
}

export default AlbumContainer;
