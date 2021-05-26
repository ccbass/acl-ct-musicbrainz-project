import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Songs from './Songs';
import styles from './Releases.css';
import { fetchRecordings } from '../../services/MusicBrainzApi';


const AlbumSongs = () => {
    const [recordings, setRecordings] = useState([]);
    const [loading, setLoading] = useState(true);
    const { release } = useParams();

    useEffect(() => {
        fetchRecordings(release)
            .then(setRecordings)
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className={styles.albumdiv}>
            <div className={styles.header}>
                <h2>Recordings</h2>
            </div>
            <Songs recordings={recordings} loading={loading} />
        </div>
    );
};

export default AlbumSongs;
