import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { RemoteDataService }  from '../remote-data.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})

export class BooktableComponent implements OnInit {
  
  @Input() books : any ; 
  displayedColumns: string[] = ['title', 'author_name', 'isbn'];

  constructor(private dialog: MatDialog, private rds: RemoteDataService, private dbs: DatabaseService) { }

  ngOnInit() {
  }

  openDialog(row): void {
 
   if(row.isbn) {
      this.dbs.fecthBookConnections(row.isbn).then(result =>
        Promise.all(result.map(movie => this.rds.fetchMovie(movie.imdbID))))
      .then(
        result => this.rds.fetchBook(row.isbn).then(r => {
          let fixed = [];
          result.forEach(o => fixed.push({...o, title: o["Title"]}));
          this.dialog.open(DialogWindowComponent, { data: {title: r.title, poster: r.cover, maker: "Author: " + r.author_name, connections: fixed}})}));
    }
  }
}

