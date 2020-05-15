import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <Link to="/">
          <img
            src={require('../../bear-reading.jpg')}
            alt="bear reading logo"
          />
        </Link>
      </div>
      <div className="header-sub-container">
        <nav>
          <ul className="header-list">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to={'/shelf'}>
              <li>My Books</li>
            </Link>
            <li>Browse</li>
          </ul>
        </nav>
      </div>
      <SearchBar />
    </div>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
