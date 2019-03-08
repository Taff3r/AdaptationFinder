import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogWindowComponent } from '../dialog-window/dialog-window.component';
import { RemoteDataService } from '../remote-data.service';

@Component({
  selector: 'app-movietable',
  templateUrl: './movietable.component.html',
  styleUrls: ['./movietable.component.css']
})

export class MovietableComponent implements OnInit {
 
  @Input() movies: any;
  displayedColumns: string[] = ["Title", "Year", "imdbID"];
 
  constructor(private dialog: MatDialog, private rds : RemoteDataService) { }
  
  openDialog(row): void {
    console.log(row.imdbID);
    if(row.imdbID){
      this.rds.fetchMovie(row.imdbID).then(r => {
         this.dialog.open(DialogWindowComponent, { data : {title: r.Title, poster: r.Poster, maker: r.Director, plot: r.Plot}});
      });
   
    }else{
      this.rds.fetchBook(row.isbn).then(r => {
        let data = {title: r.title, poster: r.cover, maker: r.author_name};
        console.log(data);
        this.dialog.open(DialogWindowComponent, data);
      });
    }
  }

  ngOnInit() {
  }

}

