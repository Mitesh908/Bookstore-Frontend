// import { Component, OnInit } from '@angular/core';
// import { Book } from '../book';
// import { BookService } from '../book.service';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent implements OnInit{
//   books: Book[] = [];

//   constructor(private bookService: BookService) { }

//   ngOnInit(): void {
//     this.getBooks();
//   }

//   getBooks(): void {
//     this.bookService.getBooks()
//       .subscribe(books => this.books = books.slice(1, 5));
//   }

// }
