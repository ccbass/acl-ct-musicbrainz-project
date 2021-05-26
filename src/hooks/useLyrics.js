import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useLyrics = () => {
    const { artist, song } = useParams();
    const [lyrics, setLyrics] = useState();
    const [loading, setLoading] = useState(true);

    const getLyrics = async (artist, song) => {
        try {
            const lyrics = await fetch(
                `https://api.lyrics.ovh/v1/${artist}/${song}`
            );
            const json = await lyrics.json();
            const lyrArr = json.lyrics.split('\n');
            return lyrArr;
        } catch(error) {
            return ['Lyrics cannot be found for this song.']; 
        }
    };
    const firstLetterUppercase = (word) => {
        return word[0].toUpperCase() + word.slice(1);
    };

    useEffect(() => {
        getLyrics(artist, song)
            .then(setLyrics)
            .then(() => setLoading(false));
    }, []);

    return { artist, song, lyrics, loading, firstLetterUppercase };
};
