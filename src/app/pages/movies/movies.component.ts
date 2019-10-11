import { Component, OnInit, Output } from '@angular/core';

import {MoviesService} from '../../services/movieService/movies.service';
@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularList: Array<Object>;
  theatersList: Array<Object>;
  topRatedList: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;
  p: number = 1;
  @Output() searchType:number=1;

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

  searchMovies(event) {
    this._moviesService.searchMovies(event).subscribe(res => {
      this.searchRes = res.results;
    })
  }

}
