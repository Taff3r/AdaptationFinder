import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {RemoteDataService} from '../remote-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {

  private searchWord: string = "";

  constructor(private rds : RemoteDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(routeParams => {
      const param = decodeURIComponent(routeParams.key);
      if (param !== "null") {
        this.searchWord = param;
        this.rds.search(param);
      }
	  });
  }

  onSubmit(event: any){
    this.router.navigateByUrl('/' + encodeURIComponent(event.target.value));
  }
}
