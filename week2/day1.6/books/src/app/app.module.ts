import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CookieModule } from 'ngx-cookie';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './books/book.component';
import { BookNewComponent } from './books/new/book-new.component';
import { BookDetailComponent } from './books/detail/book-detail.component';
import { BookTableComponent } from './books/table/book-table.component';

import { AppRoutingModule } from './app-routing.module';

import { TitleizePipe } from './titleize.pipe';
import { BookService } from './book.service';
import { AuthService } from './auth.service';
// TitleizePipe.skipWords = ['the']

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookNewComponent,
    BookDetailComponent,
    BookTableComponent,
    TitleizePipe,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    CookieModule.forRoot(),
  ],
  providers: [
    BookService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
