import { IBookReducer } from '../types/StateTypes';

const initialState: IBookReducer = {
  bookList: [],
  selectedBook: null,
};

export function booksReducer(
  state: IBookReducer = initialState,
  action: any
): IBookReducer {
  switch (action.type) {
    default:
      return state;
  }
}
