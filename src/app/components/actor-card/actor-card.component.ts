import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.scss']
})
export class ActorCardComponent implements OnInit {
  @Input()
  actor: Object;

  constructor() { }

  ngOnInit() {
  }

}
