import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-booktable',
  templateUrl: './booktable.component.html',
  styleUrls: ['./booktable.component.css']
})

export class BooktableComponent implements OnInit {
  @Input() books : any ; 
  displayedColumns: string[] = ['title', 'author', 'isbn'];

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    alert('works');
  }

}
