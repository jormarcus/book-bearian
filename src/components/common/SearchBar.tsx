import React from 'react';
import { connect } from 'react-redux';
import GoogleServices from '../../services/GoogleServices';
import { IBookItemType, IBookSearchResponseType } from '../../types/BaseTypes';
import { setBookList } from '../../actions/bookActions';
import { debounce } from 'lodash';

interface ISearchBarState {
  query: string;
}

interface ISearchBarProps {
  setBookList: (books: IBookItemType[]) => void;
}

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  state = {
    query: ''
  };

  handleQueryChange = async (event) => {
    const query = event.target.value;
    this.debouncedSearch(this.props, query);
    this.setState({ ...this.state, query });
  };

  debouncedSearch = debounce(async function (
    props: ISearchBarProps,
    query: string
  ): Promise<void> {
    if (query && query.trim().length >= 3) {
      const bookResponse: IBookSearchResponseType = await GoogleServices.getBookByQuery(
        query
      );
      if (bookResponse.totalItems > 0 && bookResponse.items) {
        props.setBookList(bookResponse.items);
      }
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
          type="text"
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
