import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})

export class BooktableComponent implements OnInit {
  
  @Input() books : any ; 
  displayedColumns: string[] = ['title', 'author_name', 'isbn'];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(row): void {
    this.dialog.open(DialogWindowComponent, {
      data: {name: row.title}
    });
  
  }

}

