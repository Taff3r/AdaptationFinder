import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {RemoteDataService} from '../remote-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  
  constructor(private rds : RemoteDataService) { }
  
  ngOnInit() {
  }

  onSubmit(event: any){
     this.rds.search(event.target.value);
  }
}
