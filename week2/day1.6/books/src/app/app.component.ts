import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from './book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  book: Book = new Book();
  books: Array<Book> = [];

  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();

    this.books.push(form.value);

    this.book = new Book();

    form.reset();
    console.log('click event fired', this.books);
  }
}
