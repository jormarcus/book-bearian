import BaseService from './BaseService';
import { config } from '../config/keys';

class GoogleServices {
  public static getBookByQuery = (bookQuery: string = '') => {
    return BaseService.GET(
      `https://www.googleapis.com/books/v1/volumes?q=${bookQuery}&key=${config.key}`
    );
  };

  public static getBookByAuthorOrTitle = (
    title: string = '',
    author: string = ''
  ) => {
    return BaseService.GET(
      `https://www.googleapis.com/books/v1/volumes?q={title}+inauthor:{author}&key=${config.key}`
    );
  };

  public static getBookShelvesByUserId(userId) {
    return BaseService.GET(
      `https://www.googleapis.com/books/v1/users/${config.userId}/bookshelves&key=${config.key}`
    );
  }
}

export default GoogleServices;
