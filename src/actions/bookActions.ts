import { IBookType } from '../types/BaseTypes';

export const SET_BOOK_LIST = 'SET_BOOK_LIST';

export const setBookList = (bookList: IBookType[]) => ({
  type: SET_BOOK_LIST,
  bookList
});
