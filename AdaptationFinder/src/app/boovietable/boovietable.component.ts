import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

export interface PeriodicElement {
  position: number;
  title: string;
  imdb: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, title: 'The Godfather', imdb: 23321},
  {position: 2, title: 'Blood in Blood out', imdb: 6543},
  {position: 3, title: 'The Lord of the Rings', imdb: 896504},
  {position: 4, title: 'Top Gun', imdb: 44356},
 
];


@Component({
  selector: 'app-boovietable',
  templateUrl: './boovietable.component.html',
  styleUrls: ['./boovietable.component.css']
})

export class BoovietableComponent implements OnInit {

  displayedColumns: string[] = ['position', 'title', 'imdb'];
  dataSource = ELEMENT_DATA;

  animal: string;
  name: string;

  constructor(private dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(BoovietableInputComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
  
  onClick(): void {
    alert('works');
  }
  
  ngOnInit() {}
}

@Component({
  selector: 'app-boovietable-input',
  templateUrl: './boovietableInput.component.html',
})

export class BoovietableInputComponent {

  constructor(private dialogRef: MatDialogRef<BoovietableInputComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
