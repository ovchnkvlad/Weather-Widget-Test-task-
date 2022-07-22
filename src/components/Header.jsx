import React from 'react';
import Search from "./Search";
import favoriteIcon from '../assets/images/favourite.svg'

const Header = (props) => {
    return (<header>
        <h1>Your weather</h1>
        <Search/>
        <span className="favorite-icon"><img src={favoriteIcon} alt=""/></span>
    </header>)
};

export default Header;