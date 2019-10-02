import { Component, OnInit } from '@angular/core';

import {MoviesService} from '../../movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  popularList: Array<Object>;
  theatersList: Array<Object>;
  topRatedList: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
    this._moviesService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });
    this._moviesService.getTopRatedMovies().subscribe(res => {
      this.topRatedList = res.results;
    });
  }

  ngOnInit() {
  }

  searchMovies() {
    this._moviesService.searchMovies(this.searchStr).subscribe(res => {
      this.searchRes = res.results;
    })
  }

}
