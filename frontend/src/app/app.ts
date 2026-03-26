import {Component, OnInit} from '@angular/core';
import {NavigationComponent} from '../navigation/navigation.component';
import {AppConfig as config} from '../environments/app-config';

@Component({
  selector: 'app-root',
  imports: [
    NavigationComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  apiUrl = config.apiUrl

  ngOnInit() {
    console.log(`Loaded app with apiUrl (production = ${config.production}): ${this.apiUrl}`)
  }
}
