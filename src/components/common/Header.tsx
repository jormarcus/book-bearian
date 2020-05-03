import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends React.Component {
  state = {};

  onSearch = (searchQuery) => {};

  render() {
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
          <input type="text" placeholder="Search..." onChange={this.onSearch} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
