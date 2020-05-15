import { IBookReducer } from '../types/StateTypes';
import { SET_BOOK_LIST } from '../actions/bookActions';

const initialState: IBookReducer = {
  bookList: [],
  selectedBook: null,
};

export function booksReducer(state: IBookReducer = initialState, action: any): IBookReducer {
  switch (action.type) {
    case SET_BOOK_LIST:
      return {
        ...state,
        bookList: action.bookList
      }
    default:
      return state;
  }
}
