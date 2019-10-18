import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {MoviesService} from '../../services/movieService/movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  movies: Array<Object>;
  searchRes: Array<Object>;
  pfilm:number = 1;
  psearch:number = 1;
  @Output() searchType:number=1;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getUpComingMovies().subscribe(res => {
      this.movies = res.results;
    });
  }

  ngOnInit() {
  }

  public searchMovies(event) {
    console.log(this.searchRes)
    this._moviesService.searchMovies(event).subscribe(res => {
      this.searchRes = res.results;
      console.log(this.searchRes)
    })
  }

}
