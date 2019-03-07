import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

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
  constructor(private bottomSheetRef: MatBottomSheetRef<CouplerInputComponent>){}
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  openLink(event:MouseEvent): void{
    this.bottomSheetRef.dismiss(),
    event.preventDefault();
  }
}
