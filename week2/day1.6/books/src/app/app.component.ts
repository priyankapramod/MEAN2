import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { TitleizePipe } from './titleize.pipe';

import { Book } from './book';

import { BOOKS } from './data/book-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TitleizePipe]
})
export class AppComponent implements OnInit {
  book: Book = new Book();
  books: Array<Book> = BOOKS;

  constructor(private titleize: TitleizePipe) {}

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();

    this.books.push(form.value);

    this.book = new Book();

    form.reset();
    console.log('click event fired', this.books);
  }

  ngOnInit(): void {
    this.titleCaseAuthors();
  }

  titleCaseAuthors(): void {
    this.books.forEach(book => {
      book.author = this.titleize.transform(book.author);
    });
  }

}
