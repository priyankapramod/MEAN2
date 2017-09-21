import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Book } from './book';

import 'rxjs/add/operator/map';


@Injectable()
export class BookService {
  public static base = 'http://59498bce6d49df0011102cfc.mockapi.io/books';

  constructor(
    private http: Http
  ) {}


  getBooks(): Observable<Book[]> {
    return this.http.get(BookService.base)
            .map(response => response.json());
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post(BookService.base, book)
            .map(response => response.json());
  }

  removeBook(book: Book): Observable<Book> {
    return this.http.delete(`${ BookService.base}/${ book.id }`)
      .map(response => response.json());
  }

}
