import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../../book';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html'
})
export class BookNewComponent {
  book: Book = new Book();

  @Output()
  addBook = new EventEmitter<Book>();

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();

    // this.books.push(form.value);
    this.addBook.emit(form.value);

    this.book = new Book();


    form.reset();
    console.log('click event fired');
  }
}
