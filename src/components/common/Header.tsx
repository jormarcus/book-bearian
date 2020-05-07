import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';

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
      <SearchBar />
    </div>
  );
};

const mapStateToProps = (state /*, ownProps*/) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
