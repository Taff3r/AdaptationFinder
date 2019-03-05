import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  private movies: any[] = [];
  private books: any[] = [];
  private connections: any[] = [];

  setMovies(data: Promise<string>) {
    this.setResult("movies", data);
  }

  setBooks(data: Promise<string>) {
    this.setResult("books", data);
  }

  setConnection(data: Promise<string>) {
    this.setResult("connections", data);
  }

  private setResult(type:string, data:any) {
    data.then(result => {
      if (result !== null) {
        this[type] = result;
        console.log(result)
      }
      });
  }

  getMovie(imdbID: string): any {
    return this.getItem(imdbID, "imdbID", "movies");
  }

  getBook(isbn: string): any {
    return this.getItem(isbn, "isbn", "books");
  }

  private getItem(key:string, type:string,  from:string): any {
    return this[from].find(item => (item[type] === key));
  }

  getMovies(): any[] {
    return this.movies;
  }

  getBooks(): any[] {
    return this.books;
  }

  getConnections(): any[] {
    return this.connections;
  }

}
