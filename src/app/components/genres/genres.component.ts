import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {MoviesService} from '../../services/movieService/movies.service';
import { SeriesService } from 'src/app/services/serieService/serieservice.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  title: string;
  movies: Object;
  series: Object;
  p: number = 1;
  @Input() genreType;
  @Output() searchType;

  constructor(
    private _moviesServices: MoviesService,
    private _seriesServices: SeriesService,
    private router: ActivatedRoute ) {

      this.router.params.subscribe((params) => {
        const id = params['id'];
        this.genreType = params['genreType']
        this.title = params['name'];
        this.searchType = this.genreType;
      })

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
        this._moviesServices.getMoviesByGenre(id).subscribe(res => {
          this.movies = res.results;
          this.searchType=1;
        });
    })
  }

}
