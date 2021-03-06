import { Component, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../../services/movieService/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;
  similarMovies: Array<Object>;
  cast: Array<Object>;
  video: Object;
  p: number = 1;
  @Output() searchType:number=1;

  constructor(
    private _moviesServices: MoviesService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._moviesServices.getMovie(id).subscribe(movie => {
        this.movie = movie;
      });
      this._moviesServices.getMovieCredits(id).subscribe(res => {
        res.cast = res.cast.filter((item) => {return item.profile_path});
        this.cast = res.cast.slice(0,4);
      });
      this._moviesServices.getMovieVideos(id).subscribe(res => {
        if(res.results && res.results.length) {
          this.video = res.results[0];
          this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
        }
      });
      this._moviesServices.getSimilarMovies(id).subscribe(res => {
        this.similarMovies = res.results.slice(0, 12);
      });
    })
  }

}
