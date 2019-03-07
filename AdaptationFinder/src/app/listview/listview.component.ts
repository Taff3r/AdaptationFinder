import { Component, OnInit, Input } from '@angular/core';
import { ResultsService } from '../results.service';
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  constructor(public rs: ResultsService) { }
  
  ngOnInit() {
  }
  
}
