import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './books/book.component';
import { BookNewComponent } from './books/new/book-new.component';
import { BookDetailComponent } from './books/detail/book-detail.component';
import { BookTableComponent } from './books/table/book-table.component';

import { TitleizePipe } from './titleize.pipe';

// TitleizePipe.skipWords = ['the']

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookNewComponent,
    BookDetailComponent,
    BookTableComponent,
    TitleizePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
