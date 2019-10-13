import { Component, OnInit, Input, Output } from '@angular/core';
import {MoviesService} from '../../services/movieService/movies.service';
import { SeriesService } from 'src/app/services/serieService/serieservice.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  providers: [MoviesService]
})
export class CategoryComponent implements OnInit {
  genres: Array<Object>;
  @Input() searchType;
  @Output() genreType;
  
  constructor(private _moviesServices: MoviesService,private _seriesServices: SeriesService) {
  }

  ngOnInit() {
    if(this.searchType==1){
      this.genreType=1;
      this._moviesServices.getGenres().subscribe(res => {
        this.genres = res.genres.slice(0, 20);
      });
    }
  }

}
