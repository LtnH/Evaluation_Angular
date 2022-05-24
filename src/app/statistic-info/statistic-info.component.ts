import { Component, OnInit, Input } from '@angular/core';
import { statistique } from 'src/models/statistic';

@Component({
  selector: 'app-statistic-info',
  templateUrl: './statistic-info.component.html',
  styleUrls: ['./statistic-info.component.css']
})
export class StatisticInfoComponent implements OnInit {

  @Input() stat! : statistique;

  constructor() { }

  ngOnInit(): void {
  }

}
