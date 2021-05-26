/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './lyrics.css';

const LyricBox = ({ lyricsArray, loading }) => {
    if(loading)
        return (
            <img src="https://i.pinimg.com/originals/d7/a9/95/d7a995f34f372832860215bbe65f2cc1.gif" />
        );

    return (
        <div className={styles.lyricbox}>
            {lyricsArray.map((lyric, i) => {
                return (
                    <p key={lyric + i} className={styles.lyricline}>
                        {lyric}
                    </p>
                );
            })}
        </div>
    );
};

LyricBox.propTypes = {
    lyricsArray: PropTypes.arrayOf(PropTypes.string.isRequired),
    loading: PropTypes.bool.isRequired,
};

export default LyricBox;
