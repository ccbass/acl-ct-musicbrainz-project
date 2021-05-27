import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import styles from './Releases.css';

const Songs = ({ recordings, loading }) => {
    const { artistname } = useParams();

    return (
        <div>
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <ul className={styles.ul} aria-label="releases">
                    {recordings.map((recording) => (
                        <li key={recording.id} className={styles.list}>
                            <Link
                                exact="true"
                                activeclassname="selected"
                                to={`/lyrics/${artistname}/${recording.title}`}
                                className={styles.link}
                                aria-label="to-lyrics"
                            >
                                <p>{recording.title}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

Songs.propTypes = {
    recordings: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default Songs;
