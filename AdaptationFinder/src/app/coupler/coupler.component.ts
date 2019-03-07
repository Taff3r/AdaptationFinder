import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {RemoteDataService} from '../remote-data.service';

@Component({
  selector: 'app-coupler',
  templateUrl: './coupler.component.html',
  styleUrls: ['./coupler.component.css']
})
export class CouplerComponent implements OnInit {

  constructor(private bottomSheet:MatBottomSheet) { }
  openBottomSheet(): void {
    this.bottomSheet.open(CouplerInputComponent);
  }
  ngOnInit() {
  }

}
@Component({
  selector: 'app-coupler-input',
  templateUrl: './couplerInput.component.html',
  styleUrls: ['./couplerInput.component.css']
})
export class CouplerInputComponent{
   
public books:any[]=[];
public movies:any[]=[];

  constructor(private bottomSheetRef: MatBottomSheetRef<CouplerInputComponent>, private rds:RemoteDataService){}
  openLink(event:MouseEvent): void{
    this.bottomSheetRef.dismiss(),
    event.preventDefault();
  }

   bookSubmit(event:any){
      this.rds.fetchBooks(event.target.value).then(results => {
         this.books = results;
         console.log(this.books);
         document.getElementById("bookSearch").click();
      });
   }

   movieSubmit(event:any){
      this.rds.fetchMovies(event.target.value).then(results => {
         this.movies = results;
         document.getElementById("movieSearch").click();
      });
   }
}
