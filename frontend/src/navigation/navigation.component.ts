import {Component, effect, ElementRef, inject, signal, TemplateRef, ViewChild} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {AsyncPipe, NgOptimizedImage} from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {Search} from '../app/pages/search/search';
import {Overlay, OverlayModule, OverlayRef} from '@angular/cdk/overlay';
import {TemplatePortal} from '@angular/cdk/portal';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    NgOptimizedImage,
    RouterLink,
    RouterOutlet,
    Search,
    OverlayModule
  ],
})
export class NavigationComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private router = inject(Router)
  readonly searchOpen = signal(false)

  @ViewChild('bigSearch')
  private searchElement!: ElementRef<HTMLInputElement>;

  constructor() {
    effect(() => {
      if (this.searchOpen() && this.searchElement) {
        setTimeout(() => this.searchElement.nativeElement.focus(), 0);
        console.log('focus')
      }
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => result.matches),
    shareReplay(),
  );

  toggleSearch() {
    this.searchOpen.update(open => !open)
  }

  get onSearchPage() {
    return this.router.url.includes('search')
  }

  @ViewChild('bigSearch') set searchRef(content: ElementRef) {
    if (content) {
      setTimeout(() => {
        const input = content.nativeElement.querySelector('input');
        if (input) input.focus();
      }, 0);
    }
  }
}
