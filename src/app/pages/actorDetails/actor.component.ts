import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {ActorService} from '../../services/actorService/actorservice.service';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  person: Object;
  movies: Array<Object>;
  p: number = 1;
  @Output() searchType:number=1;
  constructor(private _actorSerice: ActorService, private router: ActivatedRoute,) {
    
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._actorSerice.getPersonCast(id).subscribe(res => {
        this.movies = res.cast;
      });
      this._actorSerice.getPersonDetail(id).subscribe(person => {
        this.person = person;
      });
    })
  }

  ngOnInit() {
  }

}
