import { Component, OnInit, Output } from '@angular/core';
import {SeriesService} from '../../services/serieService/serieservice.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  popularList: Array<Object>;
  theatersList: Array<Object>;
  topRatedList: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;
  series: Array<Object>;
  p: number = 1;
 
  @Output() searchType:number=2;
  

  constructor(private _seriesService: SeriesService) {
   this.searchType=2;
    this._seriesService.getTopRatedSeries().subscribe(res => {
      this.topRatedList = res.results;
    });
    this._seriesService.getPopularSeries().subscribe(res => {
      this.series = res.results;
    });
  }

  ngOnInit() {
  }

  public searchSeries(event) {
    this._seriesService.searchSeries(event).subscribe(res => {
      this.searchRes = res.results;
    })
  }

}
