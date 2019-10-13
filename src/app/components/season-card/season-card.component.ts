import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'season-card',
  templateUrl: './season-card.component.html',
  styleUrls: ['./season-card.component.scss']
})
export class SeasonCardComponent implements OnInit {

  @Input() 
  season:Object;

  constructor() { }

  ngOnInit() {
  }

}
