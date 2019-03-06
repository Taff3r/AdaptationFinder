import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultsService } from './results.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient, private resultsService: ResultsService) { }

  //help method to fetch remote data. returns a JSON object
  private fetch(url: string): any {
    return this.http.get(url).toPromise().catch(response => response.json());
  }

  /*fetches the books with connections to the chosen movie and sends the result to the results service.
  see results service for the result structure*/
  fecthMovieConnections(imdbID:string) {
    this.resultsService.setConnection(this.fetchConnections(imdbID, "imdbID"));
  }

  /*fetches the movies with connections to the chosen book and sends the result to the results service.
  see results service for the result structure*/
  fecthBookConnections(isbn:string) {
    this.resultsService.setConnection(this.fetchConnections(isbn, "isbn"));
  }

  //adds connection to the database using a get request
  addConnection(imdbID:string, isbn:string) {
    const url = "http://localhost:3000/insert?imdbID=" + imdbID + "&isbn=" + isbn;
    return this.fetch(url).catch(error => null);
  }

  //help method to fecth connections for id (key) with type (isbn or imdbID)
  private fetchConnections(key: string, type:string): any {
    const url = "http://localhost:3000/" + type +"?" + type + "=" + key;
    return this.fetch(url).catch(error => null);
  }
}
