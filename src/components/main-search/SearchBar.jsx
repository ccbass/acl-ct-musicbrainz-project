import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar({ handleArtistChange, handleArtistSubmit }) {
    return (
        <div>
            <TextField
                type="text"
                id="artist-input"
                onChange={handleArtistChange}
                label="Search for an artist"
            />
            <IconButton name="search!" onClick={handleArtistSubmit} variant="contained" color="primary"><SearchIcon/></IconButton>
        </div>
    );
}

SearchBar.propTypes = {
    handleArtistChange: PropTypes.func.isRequired,
    handleArtistSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
