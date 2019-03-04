import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultsService } from './results.service';

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  constructor(private http: HttpClient,  private resultsService: ResultsService) { }

  search(param: any): void {
    // TODO: send the message _after_ fetching the heroes
    //this.messageService.addData(this.fetchMovies("the lord of the rings"));
    //this.messageService.addData(this.fetchBooks("the lord of the rings"));
    this.resultsService.addData(this.fetchMovies(param.movie));
    this.resultsService.addData(this.fetchBooks(param.book));
  }

  private remoteServiceInit() {
    return this.http.post("https://openlibrary.org/account/login", '{"username": "ol0273st-s@student.lu.se", "password": "1234"}');
  }

  private fetch(url: string): any {
    return this.http.get(url);
  }

  fetchMovies(key: string): any {
    const url = "http://www.omdbapi.com/?apikey=f22abc29&s=" + this.filter(key);
    return fetch(url).then(response => response.json()).then(result => this.filterData(["Title", "Year", "Type", "Poster", "imdbID"], result.Search, "").filter(media => media.Type !== "game"));
  }

  fetchBooks(key: string): any {
    const url = "http://openlibrary.org/search.json?title=" + this.filter(key);
    return fetch(url).then(response => response.json()).then(result => this.filterData(["title", "author_name", "isbn"], result.docs, "isbn"));
  }

  private filterData(keys: any[], data: any[], noCompare: string): any {
    let temp = data.map(entry => keys.map(key => ({[key]: entry[key]})).reduce((result, data) => ({...result, ...data}), {}));
    return this.uniqueEntries(temp, noCompare);
  }

  private uniqueEntries(data: any[], noCompare: string): any[] {
    let temp = [];
    if (data.length > 1) {
      temp = [...this.uniqueEntries(data.filter(next => !this.compareObjects(next, data[0], noCompare)), noCompare), data[0]];
    } else {
      temp = [...data];
    }
    return temp;
  }

  private compareObjects(obj1: any, obj2: any, noCompare: string): boolean {
    const stringCheck = Object.keys(obj1).filter(key => (typeof obj1[key] === "string" && key !== noCompare)).map(key => (obj1[key].toLowerCase() === obj2[key].toLowerCase())).reduce((result, check) => {result = result && check; return result}, true);
    const arrayCheck = Object.keys(obj1).filter(key => (obj1[key] instanceof Array && key !== noCompare)).map(key => this.compareArray(obj1[key], obj2[key])).reduce((result, check) => {result = result && check; return result}, true);
    return stringCheck && arrayCheck;
  }

  private compareArray(array1: string[], array2: string[]): boolean {
    if (array1 !== undefined && array2 !== undefined) {
      const intersection = array1.filter(key1 => array2.find(key2 => key2.toLowerCase() === key1.toLowerCase()) !== undefined).length;
      return intersection === array1.length && intersection === array2.length;
    }
    return false;
  }

  private filter(value: string): string {
    const tempValue = value.toLowerCase().split(" ").reduce((newKey, keyPart) => (newKey += keyPart + "+"), "");
    return tempValue.slice(0, tempValue.length - 1)
  }

}
