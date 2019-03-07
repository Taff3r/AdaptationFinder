import { Component, OnInit, Input } from '@angular/core';
import { ResultsService } from '../results.service';
@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  books : any = [{title:"book1", author_name: "auth1", isbn: "11111111"}, {title:"book2", author_name: "auth2", isbn: "22222222"}, {title:"book3", author_name: "auth3", isbn: "33333333"}];
  movies : any = [{Title: "mov1", Year: "1911", imdbID: "1111111111111"}, {Title: "mov2", Year: "1922", imdbID: "2222222222222"}, {Title: "mov3", Year: "1933", imdbID: "3333333333333"}];
  
  constructor(public rs: ResultsService) { }
  
  ngOnInit() {
  }
  
}
