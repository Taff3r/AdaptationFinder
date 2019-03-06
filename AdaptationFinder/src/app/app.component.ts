import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
   title = 'AdaptationFinder';
   // The variable search and the function handleSearch handle the passing data from SearchBar to Listview, no touchy! 
   search : any;  
   handleSearch($event){
      this.search = $event;
   }
}


