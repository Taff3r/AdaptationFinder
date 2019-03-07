import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';

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
    this.dialog.open(DialogWindowComponent);
  }

  ngOnInit() {
  }

}

