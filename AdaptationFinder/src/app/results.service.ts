import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  movies: any[] = [];
  books: any[] = [];

  setMovies(data: any) {
    data.then(result => this.movies = result);
  }

  setBooks(data: any) {
    data.then(result => this.books = result);
  }
}
