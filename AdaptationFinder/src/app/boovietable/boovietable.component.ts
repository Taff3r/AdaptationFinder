import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  position: number;
  name: string;
  imdb: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'The Godfather', imdb: 23321},
  {position: 2, name: 'Blood in Blood out', imdb: 6543},
  {position: 3, name: 'The Lord of the Rings', imdb: 896504},
  {position: 4, name: 'Top Gun', imdb: 44356},
 
];

@Component({
  selector: 'app-boovietable',
  templateUrl: './boovietable.component.html',
  styleUrls: ['./boovietable.component.css']
})

export class BoovietableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'imdb'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    alert('works');
  }

}
