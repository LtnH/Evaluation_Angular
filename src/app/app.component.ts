import { Component } from '@angular/core';
import { statistique } from '../models/statistic'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Evaluation_Angular';
  stat: statistique[] = [{
    titre: "Démographie Allemagne",
    valeur: "80000010",
    identifiant: "24a6fb60-7f7f-11ec-b9a5-e501194af5d7"
  }, {
    titre: "Démographie France",
    valeur: "65000000",
    identifiant: "c537efa0-7db6-11ec-8b1d-5d44059e886b"
  }];

  constructor() {
    setTimeout(() => {
      this.stat.push({
        titre: "Démographie Espagne",
        valeur: "49331076",
        identifiant: "c537efa0-7db6-11ec-b9a5-e501194af5d7"
      });
    }, 3000)
  }
}

