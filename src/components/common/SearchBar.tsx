import React from 'react';
import { connect } from 'react-redux';
import GoogleServices from '../../services/GoogleServices';
import { IBookType } from '../../types/BaseTypes';
// import { debounce } from 'lodash';

class SearchBar extends React.Component {
  state = {
    searchQuery: '',
    searchResults: [],
  };

  handleQueryChange = async (event) => {
    const searchQuery = event.target.value;
    console.log('sq', searchQuery);
    this.searchByQuery(searchQuery);
    // debounce(await this.searchByQuery(searchQuery), 1500);
    this.setState({ ...this.state, searchQuery });
  };

  searchByQuery = async (searchQuery): Promise<any> => {
    const books: IBookType[] = await GoogleServices.getBookByQuery(searchQuery);
    console.log(books);
    this.setState({
      ...this.state,
      searchResults: books,
    });
    return books;
  };

  clearSearchInput = () => {
    this.setState({
      searchQuery: '',
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Search by author or title..."
          value={this.state.searchQuery}
          onChange={this.handleQueryChange}
          className="header-book-search"
        />
        <div
          className="search-clear-input-btn"
          onClick={this.clearSearchInput}
        ></div>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
