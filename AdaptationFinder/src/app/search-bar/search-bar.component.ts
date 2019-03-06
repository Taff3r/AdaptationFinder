import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  input: any ;
  
  @Output() output = new EventEmitter<string>();
  constructor() { }
  
  ngOnInit() {
  }

  onSubmit(event: any){
     console.log("emitting");
     this.output.emit(event.target.value);	
  }
}
