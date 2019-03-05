import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultsService } from './results.service';

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  constructor(private http: HttpClient,  private resultsService: ResultsService) { }

  search(param: string): void {
    this.resultsService.setMovies(this.fetchMovies(param));
    this.resultsService.setBooks(this.fetchBooks(param));
  }

  private remoteServiceInit() {
    return this.http.post("https://openlibrary.org/account/login", '{"username": "ol0273st-s@student.lu.se", "password": "1234"}');
  }

  private fetch(url: string): any {
    return this.http.get(url).toPromise().catch(response => response.json());
  }

  fetchMovies(key: string): any {
    const url = "http://www.omdbapi.com/?apikey=f22abc29&s=" + this.keyEncoder(key);
    return this.fetch(url)
    .then(object => this.filterData(["Type", "imdbID", "Poster", "Title", "Year"], object.Search)
    .filter(media => media.Type !== "game"))
    .then(entries => this.getValidEntries(entries)).catch(error => null);
  }

  fetchBooks(key: string): any {
    const url = "http://openlibrary.org/search.json?title=" + this.keyEncoder(key);
    return this.fetch(url)
    .then(object => this.filterData(["title", "author_name", "isbn"], object.docs))
    .then(entries => this.getValidEntries(entries))
    .then(entries => this.uniqueEntries(entries, "isbn"))
    .then(results => results.map(result => ({...result, "isbn":result.isbn[0], "cover":"http://covers.openlibrary.org/b/isbn/" + result.isbn[0] + "-M.jpg"})))
    .catch(error => null);;
  }

  private filterData(keys: any[], data: any[]): any {
    return data.map(entry => keys.map(key => ({[key]: entry[key]}))
    .reduce((result, data) => ({...result, ...data}), {}));
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

  private getValidEntries(data: any): any {
    const keys = Object.keys(data[0]);
    return data.filter(entry => keys.map(key => (entry[key] !== undefined)).reduce((result, check) => {result = result && check; return result;}, true));
  }

  private compareObjects(obj1: any, obj2: any, noCompare: string): boolean {
    return this.objectString(obj1, noCompare) === this.objectString(obj2, noCompare);
  }

  private objectString(obj: any, ignoreProp: string): string {
    return Object.keys(obj).reduce((text, key) => {
      if (key !== ignoreProp) {
        text += obj[key].toString().toLowerCase().trim()
      }
      return text;
    }, "");
  }

  private keyEncoder(value: string): string {
    const tempValue = value.toLowerCase().split(" ").reduce((newKey, keyPart) => (newKey += keyPart + "+"), "");
    return tempValue.slice(0, tempValue.length - 1)
  }

}
