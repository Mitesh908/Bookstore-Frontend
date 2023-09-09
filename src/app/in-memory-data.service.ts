import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Book } from './book';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const books = [
      { id: 1, name: 'Maths' },
      { id: 2, name: 'Rd Sharma' },
      { id: 3, name: 'Tripathi' },
      { id: 4, name: 'RS verma' },
      { id: 5, name: 'Manga' },
      { id: 6, name: 'Harry potter ' },
      { id: 7, name: 'One piece' },
      { id: 8, name: 'Thor ' },
      { id: 9, name: 'LET Us C' },
      { id: 10, name: 'Tornado' }
    ];
    return {books};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(books: Book[]): number {
    return books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 11;
  }
}