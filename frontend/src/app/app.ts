import { Component, inject, OnInit } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { AppConfig as config } from '../environments/app-config';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly transloco = inject(TranslocoService);

  apiUrl = config.apiUrl;

  ngOnInit() {
    const browserLanguage = navigator.language.split('-')[0];
    this.transloco.setActiveLang(browserLanguage);

    console.log(`Loaded app with:`);
    console.log(`\tapiUrl = ${this.apiUrl}`);
    console.log(`\tlanguage = ${browserLanguage}`);
  }
}
