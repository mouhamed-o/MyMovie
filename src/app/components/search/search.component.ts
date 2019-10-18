import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import {MoviesService} from '../../services/movieService/movies.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  @Output() changeMovies = new EventEmitter<string>();
  @Output() changeSeries = new EventEmitter<string>();
  @Output() changeActors = new EventEmitter<string>();
  @Input() searchType;

  constructor(private _moviesService: MoviesService) {
  }

  ngOnInit() {
  }

  search() {
    if (this.searchType === 1) {
      console.log("Emit : " + this.searchStr)
      this.changeMovies.emit(this.searchStr);
    } else if (this.searchType === 2) {
      this.changeSeries.emit(this.searchStr);
    } else {
      this.changeActors.emit(this.searchStr);
    }
  }

}
