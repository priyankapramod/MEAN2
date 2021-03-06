import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { BookService } from '../../book.service';

import { Book } from '../../book';

@Component({
  selector: 'book-new',
  templateUrl: './book-new.component.html'
})
export class BookNewComponent {
  book: Book = new Book();

  @Output()
  addBook = new EventEmitter<Book>();

  constructor(
    private bookService: BookService,
    private router: Router,
  ) {}


  onSubmit(event: Event, form: NgForm): void {
    event.preventDefault();

    this.bookService.createBook(form.value)
      .subscribe(book => {
        this.addBook.emit(book);
        this.book = new Book();
        form.reset();
        this.router.navigate(['/list']);
      }, error => {
        console.log('errors creating book', error);
        // display messages to user
      });


    console.log('click event fired');
  }
}
