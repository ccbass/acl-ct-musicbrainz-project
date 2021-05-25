import React from 'react';
import PropTypes from 'prop-types';

const Songs = ({ recordings, loading }) => { 
  return (
    <div>
      {
        loading 
          ?
          <h2>Loading...</h2>
          :
          <ul>
            {recordings.map(recording => (
              <li key={recording.id}>
                <p>{recording.title}</p>
              </li>))}
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
