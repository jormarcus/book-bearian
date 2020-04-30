import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-sub-container">
        <div className="header-app-title">Book-Bearian</div>
        <nav>
          <ul className="header-list">
            <li>Home</li>
            <Link to={'/shelf'}>
              <li>My Books</li>
            </Link>
            <li>Browse</li>
          </ul>
        </nav>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Header;
