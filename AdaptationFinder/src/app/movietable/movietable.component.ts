import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { RemoteDataService } from '../remote-data.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.css']
})

export class MovietableComponent implements OnInit {
 
  @Input() movies: any;
  displayedColumns: string[] = ["Title", "Year"];

 
  constructor(private dialog: MatDialog, private rds : RemoteDataService, private dbs: DatabaseService) { }
  
  openDialog(row): void {
    if(row.imdbID) {
      this.dbs.fecthMovieConnections(row.imdbID).then(result => 
        Promise.all(result.map(book => this.rds.fetchBook(book.isbn))))
      .then(
        result => this.rds.fetchMovie(row.imdbID).then(r => {
          this.dialog.open(DialogWindowComponent, { data: {title: r.Title, poster: r.Poster, maker: "Director: " + r.Director, plot: r.Plot, connections: result, link: r.url}})}));
    }
  }

  ngOnInit() {
  }

}

