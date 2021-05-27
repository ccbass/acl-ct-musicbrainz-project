import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const Header = () => {
    return (
        <header>
            <Link to="/"><HomeIcon /></Link>
        </header>
    );
};

export default Header;
