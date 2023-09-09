import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { MessagesComponent } from './messages/messages.component';



const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'messages', component: MessagesComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'book-search', component: BookSearchComponent},
  { path: 'book-details', component:BookDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }