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
  @Input() searchType;

  constructor(private _moviesService: MoviesService) {
  }

  ngOnInit() {
  }

  search() {
    if(this.searchType==1){
      this.changeMovies.emit(this.searchStr);
    }
    else{
      this.changeSeries.emit(this.searchStr);
    }
  }

}
