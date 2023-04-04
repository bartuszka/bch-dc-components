import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BchDcHeaderButtonModel
} from '../../projects/bch-dc-components/src/lib/bch-dc-header/models/bch-dc-header-button.model';
import { headerButtonsData } from './shared/data/header-buttons-data';
import { NavigationLink } from './shared/models/navigation-link';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SideMenuDisplayModeModel } from 'bch-dc-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public title = 'bch-dc-workspace';
  public headerButtons: BchDcHeaderButtonModel[];
  public currentPageForFilters: NavigationLink;
  public navigationLinks: typeof NavigationLink = NavigationLink;
  public sideMenuDisplayModes: typeof SideMenuDisplayModeModel = SideMenuDisplayModeModel;

  private routerSubscription: Subscription;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.headerButtons = headerButtonsData;
    this.setRouteStream();
  }

  public ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  private setRouteStream(): void {
    this.routerSubscription = this.router.events
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.currentPageForFilters = event.urlAfterRedirects as NavigationLink;
        }
      });
  }
}
