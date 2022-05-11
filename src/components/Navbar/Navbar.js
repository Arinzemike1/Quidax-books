import React from 'react';
import Icon from '../Icons/icon';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="book-container">
        <div style={{display: 'flex'}}>
            <div>
                <Icon name="quidax-logo" />
            </div>
            <span style={{ marginTop: '10px', marginLeft: '10px' }}>
                <span>Quidax Books</span><br />
                <span className="subtitle">A flimsy book company</span>
            </span>
                
        </div>

        <div className="search-bar">
            <input type="text" placeholder="Search books, genres, authors, etc." />
            {/* <button><img src="./search-icon.svg" alt="" /></button> */}
            <button>Search</button>
        </div>

        <div>
            <Icon name="profile-icon" />&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Icon name="cart-icon" />
        </div>
    </div>
  );
};

export default Navbar;
