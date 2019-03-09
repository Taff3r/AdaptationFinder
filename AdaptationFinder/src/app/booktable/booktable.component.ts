import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { RemoteDataService }  from '../remote-data.service';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})

export class BooktableComponent implements OnInit {
  
  @Input() books : any ; 
  displayedColumns: string[] = ['title', 'author_name', 'isbn'];

  constructor(private dialog: MatDialog, private rds: RemoteDataService) { }

  ngOnInit() {
  }

  openDialog(row): void {
    if(row.isbn){
      this.rds.fetchBook(row.isbn).then(r => {
        this.dialog.open(DialogWindowComponent, { data: {title: r.title, poster: r.cover, maker: "Author: " + r.author_name, link: r.url}});
      });
    }

  }
}
