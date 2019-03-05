import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  movies: any[] = [];
  books: any[] = [];
  movieConnections: string[] = [];
  bookConnections: string[] = [];

  setMovies(data: Promise<string>) {
    this.setResult("movies", data);
  }

  setBooks(data: Promise<string>) {
    this.setResult("books", data);
  }

  addMovieConnection(data: Promise<string>) {
    this.setResult("movieConnections", data);
  }

  private setResult(type:string, data:any) {
    data.then(result => {
      if (result !== null) {
        this[type] = result;
        console.log(result)
      }
      });
  }
}
