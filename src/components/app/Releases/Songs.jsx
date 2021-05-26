import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Releases.css';

const Songs = ({ recordings, loading }) => { 
    return (
        <div>
            {
                loading 
                    ?
                    <h2>Loading...</h2>
                    :
                    <ul className={styles.ul}>
                        {recordings.map(recording => (
                            <li key={recording.id} className={styles.list}>
                                <Link exact="true" activeclassname="selected" to={'/:artist/:release/:song'} className={styles.link}>
                                    <p>{recording.title}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
            }
        </div>
    );
};

Songs.propTypes = { 
    recordings: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired

};

export default Songs;
