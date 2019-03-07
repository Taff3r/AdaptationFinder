import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';


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

  openDialog(): void {
    let dialogRef = this.dialog.open(BooktableInputComponent, {
      width: '250px',
    });
  
  }

}

@Component({
  selector: 'app-booktable-input',
  templateUrl: './booktableInput.component.html',
})

export class BooktableInputComponent {

  constructor(private dialogRef: MatDialogRef<BooktableInputComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
