import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultsService } from './results.service';

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  constructor(private http: HttpClient,  private resultsService: ResultsService) { }
  
  /*searches for a keyword and sends the result to the results service.
  see results service for the result structure*/
  search(param: string): void {
    this.resultsService.setMovies(this.fetchMovies(param));
    this.resultsService.setBooks(this.fetchBooks(param));
  }

  //help method to fetch remote data. returns a JSON object
  private fetch(url: string): any {
    return this.http.get(url).toPromise().catch(response => response.json());
  }

  //fetches movies after keyword and returns a Promise containing a array of JSON objects
  fetchMovies(key: string): any {
    const url = "http://www.omdbapi.com/?apikey=f22abc29&s=" + this.keyEncoder(key);   //url to the resource
    return this.fetch(url)  //async fetch for the resulting JSON object
    .then(object => object.Search.map(data => this.filterData(["Type", "imdbID", "Poster", "Title", "Year"], data)) //filters out irrelevant information
    .filter(media => (media.Type !== "game")) //filters out content of type "game"
    .map(entry => ({...entry, "url":"https://www.imdb.com/title/" + entry.imdbID})))  //adds url to imdb page. obs! then closes here
    .then(entries => this.getValidEntries(entries)).catch(error => null); //filters out objects with undefined properties and returns a Promise containing the result if no error has occurred
  }

  //fetches books after keyword and returns a Promise containing a array of JSON objects
  fetchBooks(key: string): any {
    const url = "http://openlibrary.org/search.json?title=" + this.keyEncoder(key); //url to the resource
    return this.fetch(url)  //async fetch for the resulting JSON object
    .then(object => object.docs.map(data => this.filterData(["title", "author_name", "isbn"], data)))  //filters out irrelevant information
    .then(entries => this.getValidEntries(entries)) //filters out objects with undefined properties
    .then(entries => this.uniqueEntries(entries, "isbn") //returns only one of books with same title and others
    .map(result => ({...result, "isbn":result.isbn[0], "cover":"http://covers.openlibrary.org/b/isbn/" + result.isbn[0] + "-M.jpg"})))  //replaces the isbn array with the first element (used as key for connections) and adds a cover property
    .catch(error => null);
  }

  //fetches movie with given imdbID and returns a Promise containing a JSON object
  fetchMovie(imdbID:string): any {
    const url = "http://www.omdbapi.com/?apikey=f22abc29&i=" + imdbID;
    return this.fetch(url)
    .then(object => ({...this.filterData(["Type", "imdbID", "Poster", "Title", "Year"], object), "url":"https://www.imdb.com/title/" + imdbID})) //filters the response and adds url to imdb page
    .catch(error => null);
  }

  //help method to filter object properties after chosen keys (array of property names)
  private filterData(keys: any[], data: any): any {
    return keys.map(key => ({[key]: data[key]})) //replaces the object with an array containing the chosen properties as objects
    .reduce((result, data) => ({...result, ...data}), {}); //reduces the array to a new object. obs! this is done inside the first map
  }

  //help method to get unique objects in the a array. the noCompare parameter is parsed to the compareObjects method call
  private uniqueEntries(data: any[], noCompare: string): any[] {
    let temp = [];
    if (data.length > 1) {  //spreads the first object with the objects not equal to it in the data array to a new array in a recursive manner
      temp = [...this.uniqueEntries(data.filter(next => !this.objectsEquivalent(next, data[0], noCompare)), noCompare), data[0]];
    } else {
      temp = [...data];
    }
    return temp;
  }

  //help method to check and return objects with defined properties
  private getValidEntries(data: any): any {
    const keys = Object.keys(data[0]);
    return data.filter(entry => keys.map(key => (entry[key] !== undefined)).reduce((result, check) => {result = result && check; return result;}, true));
  }

  //help method to check equality to objects by case insensitively comparing properties. the noCompare parameter is used to ignore a property
  private objectsEquivalent(obj1: any, obj2: any, noCompare: string): boolean {
    return this.objectString(obj1, noCompare) === this.objectString(obj2, noCompare);
  }

  //help method to get a case insensitive string of a JSON object ignoring a property
  private objectString(obj: any, ignoreProp: string): string {
    return Object.keys(obj).reduce((text, key) => {
      if (key !== ignoreProp) {
        text += obj[key].toString().toLowerCase().trim();   //i am doing it this way because some some values can be equivalent yet different in trivial ways
      }
      return text;
    }, "");
  }

  //help method to reconstruct the search keyword to the correct format used by the APIs. spaces are replaced with "+"
  private keyEncoder(value: string): string {
    const tempValue = value.toLowerCase().split(" ").reduce((newKey, keyPart) => (newKey += keyPart + "+"), "");
    return tempValue.slice(0, tempValue.length - 1)
  }

  /*example for fetching information for getConnections:
  this.[database service name].fecthMovieConnections("tt0120783").then(connections =>
      this.[results service name].setConnectionData(Promise.all(connections.map(connection => this.[remote-data service name].fetchMovie(connection.imdbID)))));
  */

}
