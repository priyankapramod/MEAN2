import { Component, OnInit } from '@angular/core';

import { Book } from '../../book';

import { TitleizePipe } from '../../titleize.pipe';

// import { BOOKS } from '../../data/book-data';

import { BookService } from '../../book.service';

@Component({
  selector: 'book-table',
  templateUrl: './book-table.component.html',
  providers: [TitleizePipe]
})
export class BookTableComponent implements OnInit {
  books: Array<Book> = [];
  selectedBook: Book;
  errorMessage: string;

  constructor(
    private bookService: BookService,
    private titleize: TitleizePipe
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks()
      .subscribe(books => {
        console.log(books);
        this.books = books;
        this.titleCaseAuthors();
      }, error => {
        console.log(`there was an error ${ error }`);
      })
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

  removeBook(event: Event, book: Book): void {

    event.stopPropagation();
    console.log(book);

    this.bookService.removeBook(book)
      .subscribe(result => {
        if (this.books.includes(book)) {
          this.books.splice(this.books.indexOf(book), 1);
        }

        if (this.selectedBook === book) {
          this.selectBook(book);
        }
      }, errorResponse => {
        console.log(errorResponse.json());
        this.errorMessage = errorResponse.json();

        setTimeout(() => {
          this.errorMessage = null;
        }, 3000);
      });
  }
}
