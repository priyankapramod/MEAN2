import { Component, OnInit } from '@angular/core';

import { Book } from '../../book';

import { TitleizePipe } from '../../titleize.pipe';

import { BOOKS } from '../../data/book-data';

@Component({
  selector: 'book-table',
  templateUrl: './book-table.component.html',
  providers: [TitleizePipe]
})
export class BookTableComponent implements OnInit {
  books: Array<Book> = BOOKS;
  selectedBook: Book;

  constructor(private titleize: TitleizePipe) {}

  ngOnInit(): void {
    this.titleCaseAuthors();
  }

  titleCaseAuthors(): void {
    this.books.forEach(book => {
      book.author = this.titleize.transform(book.author);
    });
  }

  addBook(book: Book): void {
    this.books.push(book);
  }

  selectBook(book: Book): void {
    console.log(book);
    this.selectedBook = (this.selectedBook === book) ? null : book;
  }
}
