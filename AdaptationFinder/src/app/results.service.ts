import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  //fallowing arrays contains JSON objects
  movies: any[] = [];   //structure [{Poster:"...", Title:"...", Type:"...", Year:"...", imdbID:"...", url:"..."}], the url property is for the corresponding imdb page
  books: any[] = [];    //structure [{title:"...", isbn:"...", cover:"...", auther_name:["..."]}], the auther_name property contains an array

  //used by remote-data service to set search results for movies
  setMovies(data: Promise<any>) {
    this.setResult("movies", data);
  }

  //used by remote-data service to set search results for books
  setBooks(data: Promise<any>) {
    this.setResult("books", data);
  }

  //help method to sets the resolve result of the data promise to target array
  private setResult(target:string, data: Promise<any>) {
    data.then(result => {
      if (result !== null) {
        this[target] = result;
      } else {
        this[target] = [];
      }
      });
  }

}
