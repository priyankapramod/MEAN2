import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './books/book.component';
import { HomeComponent } from './home/home.component';
import { BookNewComponent } from './books/new/book-new.component';
import { BookDetailComponent } from './books/detail/book-detail.component';
import { BookTableComponent } from './books/table/book-table.component';

const routes: Routes = [
  {
    path: 'books/new',
    component: BookNewComponent,
  },
  {
    path: 'books/list',
    component: BookTableComponent,
  },
  {
    path: 'books/:id',
    component: BookDetailComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ''
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
