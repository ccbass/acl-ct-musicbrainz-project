import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from './AlbumItem';
import style from './Albums.css';

const AlbumList = ({ album }) => {
    return (
        <div className={style.big}>
            <div className={style.list}>
                <ul aria-label="album">
                    {album.map((album) => (
                        <li key={album.id}>
                            <AlbumItem
                                id={album.id}
                                title={album.title}
                                date={album.date}
                                quality={album.quality}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

AlbumList.propTypes = {
    album: PropTypes.array.isRequired,
};

export default AlbumList;
