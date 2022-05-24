import {Component} from '@angular/core';
import {statistique} from '../models/statistic'
import { TableauService } from './service/tableau.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public tableau: TableauService) {
  }
}

