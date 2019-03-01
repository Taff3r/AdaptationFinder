import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResultsService } from './results.service';

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  constructor(private http: HttpClient,  private resultsService: ResultsService) { }

  private remoteServiceInit() {
    return this.http.post("https://openlibrary.org/account/login", '{"username": "ol0273st-s@student.lu.se", "password": "1234"}');
  }

  //$ curl -i -H 'Content-Type: application/json' -d '{"username": "ol0273st-s@student.lu.se", "password": "1234"}' https://openlibrary.org/account/login

  private fetch(url: string) {
    return this.http.get(url);
  }

  fetchMovies(key: string) {
    const url = "http://www.omdbapi.com/?apikey=f22abc29&t=" + key;
    fetch(url).then(response => response.json()).then(object => this.resultsService.addData(object));
  }

  fetchBooks(key: string) {
    const url = "http://openlibrary.org/search.json?title=" + key.toLowerCase().split(" ").reduce((newKey, keyPart) => (newKey += "+" + keyPart), "");
    fetch(url).then(response => response.json()).then(object => this.resultsService.addData(object));
  }
}
