import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  //fallowing arrays contains JSON objects
  private movies: any[] = [];   //structure [{Poster:"...", Title:"...", Type:"...", Year:"...", imdbID:"...", url:"..."}], the url property is for the corresponding imdb page
  private books: any[] = [];    //structure [{title:"...", isbn:"...", cover:"...", auther_name:["..."]}], the auther_name property contains an array
  private connections: any[] = [];    //structure [{isbn:"...", imdbID:"..."}]

  //used by remote-data service to set search results for movies
  setMovies(data: Promise<any>) {
    this.setResult("movies", data);
  }

  //used by remote-data service to set search results for books
  setBooks(data: Promise<any>) {
    this.setResult("books", data);
  }

  //used by database service to set search results for connections
  setConnection(data: Promise<any>) {
    this.setResult("connections", data);
  }

  //help method to sets the resolve result of the data promise to target array
  private setResult(target:string, data: Promise<any>) {
    data.then(result => {
      if (result !== null) {
        this[target] = result;
        console.log(result)
      }
      });
  }

  //returns the movie with the chosen imdbID
  getMovie(imdbID: string): any {
    return this.getItem(imdbID, "imdbID", "movies");
  }

  //returns the book with the chosen isbn
  getBook(isbn: string): any {
    return this.getItem(isbn, "isbn", "books");
  }

  //help method to get an item from a source (from) by id (key)
  private getItem(key:string, type:string,  from:string): any {
    return this[from].find(item => (item[type] === key));
  }

  //getter for movies array
  getMovies(): any[] {
    return this.movies;
  }

  //getter for books array
  getBooks(): any[] {
    return this.books;
  }

  //getter for connections array
  getConnections(): any[] {
    return this.connections;
  }

}
