import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Songs from './Songs';
import styles from './Releases.css';

const AlbumSongs = () => {
    const [recordings, setRecordings] = useState([]);
    const [loading, setLoading] = useState(true);
    const { release } = useParams();

    const fetchRecordings = async (release) => {
        const res = await fetch(
            `http://musicbrainz.org/ws/2/recording?release=${release}&fmt=json`
        );
        // fetch('http://musicbrainz.org/ws/2/recording?release=7d166a44-cfb5-4b08-aacb-6863bbe677d6&fmt=json');

        const recs = await res.json();

        return recs.recordings.map((recording) => ({
            title: recording.title,
            releaseDate: recording.first_release_date,
            disambiguation: recording.disambiguation,
            length: recording.length,
            id: recording.id,
            video: recording.video,
        }));
    };

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
