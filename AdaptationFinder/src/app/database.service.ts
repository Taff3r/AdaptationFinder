import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultsService } from './results.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient, private resultsService: ResultsService) { }

  private fetch(url: string): any {
    return this.http.get(url).toPromise().catch(response => response.json());
  }

  fecthMovieConnections(key:string) {
    this.resultsService.setConnection(this.fetchConnections(key, "imdbID", "isbn"));
  }

  fecthBookConnections(key:string) {
    this.resultsService.setConnection(this.fetchConnections(key, "isbn", "imdbID"));
  }

  addConnection(imdbID:string, isbn:string) {
    const url = "http://localhost:3000/insert?imdbID=" + imdbID + "&isbn=" + isbn;
    return this.fetch(url).catch(error => null);
  }

  private fetchConnections(key: string, sourceType:string, targetType: string): any {
    const url = "http://localhost:3000/" + sourceType +"?" + sourceType + "=" + key;
    return this.fetch(url).catch(error => null);
  }
}
