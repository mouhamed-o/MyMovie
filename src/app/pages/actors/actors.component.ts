import { Component, OnInit, Output } from '@angular/core';
import {ActorService} from '../../services/actorService/actorservice.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {

  popularList: Array<Object>;
  theatersList: Array<Object>;
  searchRes: Array<Object>;
  searchStr: string;
  p: number = 1;
  @Output() searchType:number=3;

  constructor(private _actorsService: ActorService) {
    this._actorsService.getPopular().subscribe(res => {
      this.popularList = res.results;
    });
    this._actorsService.getInTheaters().subscribe(res => {
      this.theatersList = res.results;
    });

  }


  ngOnInit() {
  }

  searchActors(event:any) {
    this._actorsService.searchActors(event).subscribe(res => {
      this.searchRes = res.results;
    });
  }
}
