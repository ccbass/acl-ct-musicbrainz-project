import React from 'react';
import LyricBox from '../components/lyricPage/LyricBox';
import styles from '../components/lyricPage/lyrics.css';
import { useLyrics } from '../hooks/useLyrics';

const LyricContainer = () => {
    const { artist, song, lyrics, loading, firstLetterUppercase } = useLyrics();

    return (
        <div className={styles.container}>
            <header className={styles.heading}>
                <span>{song}</span> by
                <span> {firstLetterUppercase(artist)}</span>
            </header>
            <LyricBox
                lyricsArray={lyrics}
                loading={loading}
                
            />
        </div>
    );
};

export default LyricContainer;
