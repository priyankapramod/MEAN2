import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { TitleizePipe } from './titleize.pipe';

// TitleizePipe.skipWords = ['the']

@NgModule({
  declarations: [
    AppComponent,
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
