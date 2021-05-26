import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LyricBox from '../components/lyricPage/LyricBox';
import styles from '../components/lyricPage/lyrics.css';

const LyricContainer = () => {
    const { artist, song } = useParams();
    const [lyrics, setLyrics] = useState();
    const [loading, setLoading] = useState(true);

    const getLyrics = async (artist, song) => {
        const lyrics = await fetch(
            `https://api.lyrics.ovh/v1/${artist}/${song}`
        );

        const json = await lyrics.json();
        const lyrArr = json.lyrics.split('\n');
        return lyrArr;
    };
    const firstLetterUppercase = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    };

    useEffect(() => {
        getLyrics(artist, song)
            .then(setLyrics)
            .then(() => setLoading(false));
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.heading}>
                <span>{song}</span> by
                <span>
                    {' '}
                    {firstLetterUppercase(artist)}
                </span>
            </header>
            <LyricBox lyricsArray={lyrics} loading={loading} />
        </div>
    );
};

export default LyricContainer;
