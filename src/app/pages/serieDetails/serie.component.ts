import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SeriesService } from 'src/app/services/serieService/serieservice.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  serie: Object;
  video: Object;
  p: number = 1;
  @Output() searchType:number=2;
  constructor(
    private _seriesServices: SeriesService,
    private router: ActivatedRoute,
    private sanitizer: DomSanitizer
    ) {

  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._seriesServices.getSerieDetails(id).subscribe(serie => {
        this.serie = serie;
      });
      this._seriesServices.getSerieVideos(id).subscribe(res => {
        if(res.results && res.results.length) {
          this.video = res.results[0];
          this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
        }
      });
    })
  }

}
