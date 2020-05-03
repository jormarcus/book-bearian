import { IBookType } from './BaseTypes';

export default interface StateTypes {
  bookReducer: IBookReducer;
}

export interface IBookReducer {
  bookList: IBookType[];
  selectedBook: IBookType | null;
}
