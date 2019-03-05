import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  books : any = ["Book1", "Book2", "Book3"];
  movies : any = ["Movie1", "Movie2", "Movie3"];
  constructor() { }

  ngOnInit() {
  }

}
