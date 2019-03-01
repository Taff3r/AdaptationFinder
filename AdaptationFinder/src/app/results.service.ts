import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {

  results: any[] = [];

  addData(data: any) {
    this.results.push(data);
  }

  clear() {
    this.results = [];
  }
}
