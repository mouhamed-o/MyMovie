import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import {MoviesService} from '../../movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  movies: Array<Object>;
  searchRes: Array<Object>;
  p: number = 1;

  constructor(private _moviesService: MoviesService) {
    this._moviesService.getUpComingMovies().subscribe(res => {
      this.movies = res.results;
    });
  }

  ngOnInit() {
  }

  public searchMovies(event) {
    this._moviesService.searchMovies(event).subscribe(res => {
      this.searchRes = res.results;
    })
  }

}
