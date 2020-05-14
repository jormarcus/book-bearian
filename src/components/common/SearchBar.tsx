import React from 'react';
import { connect } from 'react-redux';
import GoogleServices from '../../services/GoogleServices';
import { IBookType } from '../../types/BaseTypes';
import { setBookList } from '../../actions/bookActions';
import { debounce } from 'lodash';

interface ISearchBarState {
  query: string;
}

interface ISearchBarProps {
  setBookList: (books: IBookType[]) => void;
}

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  state = {
    query: ''
  };

  handleQueryChange = async (event) => {
    const query = event.target.value;
    console.log('sq', query);
    this.debouncedSearch(this.props, query);
    this.setState({ ...this.state, query });
  };

  searchByQuery = async (query: string) => {
    if (query && query.length >= 3) {
      const books: IBookType[] = await GoogleServices.getBookByQuery(query);
      this.props.setBookList(books);
      return books;
    }
  };

  debouncedSearch = debounce(async function (
    props: ISearchBarProps,
    query: string
  ) {
    if (query && query.length >= 3) {
      const books: IBookType[] = await GoogleServices.getBookByQuery(query);
      props.setBookList(books);
      return books;
    }
  },
  1000);

  clearSearchInput = () => {
    this.setState({
      ...this.state,
      query: ''
    });
  };

  renderClearSearchButton = (): JSX.Element => (
    <span className="search-clear-input-btn" onClick={this.clearSearchInput}>
      X
    </span>
  );

  render() {
    return (
      <div className="header-search-container">
        <input
          className="header-book-search"
          placeholder="Search by author or title..."
          value={this.state.query}
          onChange={this.handleQueryChange}
        />
        {this.state.query && this.renderClearSearchButton()}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setBookList: (bookList) => dispatch(setBookList(bookList))
});

export default connect(null, mapDispatchToProps)(SearchBar);
