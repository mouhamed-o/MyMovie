import { Component, OnInit, Output } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';

import {SeriesService} from '../../services/serieService/serieservice.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  

  constructor(private _seriesService: SeriesService) {
   this.searchType=2;
    this._seriesService.getTopRatedSeries().subscribe(res => {
      this.topRatedList = res.results;
    });
    this._seriesService.getPopularSeries().subscribe(res => {
      this.series = res.results;
    });
  }
  popularList: Array<Object>;
  theatersList: Array<Object>;
  topRatedList: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;
  series: Array<Object>;
  pRecherche: number = 1;
  pPopulaire: number = 1;
  pBest: number = 1;
 
  @Output() searchType:number=2;

    public config: PaginationInstance = {
      id: 'app-series',
      itemsPerPage: 10,
      currentPage: 1
    };

  ngOnInit() {
  }

  public searchSeries(event) {
    this._seriesService.searchSeries(event).subscribe(res => {
      this.searchRes = res.results;
    });
  }

}
