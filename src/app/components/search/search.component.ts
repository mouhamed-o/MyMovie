import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {MoviesService} from '../../movies.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  @Output() change = new EventEmitter<string>();

  constructor(private _moviesService: MoviesService) {
  }

  ngOnInit() {
  }

  searchMovies() {
    this.change.emit(this.searchStr);
  }

}
