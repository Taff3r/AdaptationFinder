import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.css']
})

export class MovietableComponent implements OnInit {
 
  @Input() movies: any;
  displayedColumns: string[] = ["Title", "Year", "imdbID"];
 
  constructor(private dialog: MatDialog) { }
  
  openDialog(): void {
    let dialogRef = this.dialog.open(MovietableInputComponent, {
      width: '250px',
    });
  
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-movietable-input',
  templateUrl: './movietableInput.component.html',
})

export class MovietableInputComponent {

  constructor(private dialogRef: MatDialogRef<MovietableInputComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
