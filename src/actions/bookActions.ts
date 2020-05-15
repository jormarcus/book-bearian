import { IBookItemType } from '../types/BaseTypes';

export const SET_BOOK_LIST = 'SET_BOOK_LIST';

export const setBookList = (bookList: IBookItemType[]) => ({
  type: SET_BOOK_LIST,
  bookList
});
