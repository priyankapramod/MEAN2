import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../book';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html'
})

export class BookNewComponent {
  book: Book = new Book();

  books: Book[] = [];

  addBook(event: Event, form: NgForm, book: Book): void {

    event.preventDefault();

    console.log(this.book);
    this.books.push(form.value);

    this.book = new Book();

    form.reset();

    console.log(this.books);


  }
}
