import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

import { AppController } from './app.controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AppController implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private titleService: Title) {
    super();
  }

  ngOnInit(): void {
    this.setBrowserTabTitle();
  }

  private setBrowserTabTitle(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.route),
      map(route => this.getRouteFirstChild(route)),
      filter(route => route.outlet === 'primary'),
      mergeMap(route => route.data),
    ).subscribe(event => this.titleService.setTitle(this.buildTitle(event['title'])));
  }

  private getRouteFirstChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }

    return route;
  }

  private buildTitle(pageTitle: string): string {
    if (pageTitle && pageTitle !== this.trans.home) {
      return [pageTitle, this.config.appTitle].join(this.config.browserTabTitleDelimiter);
    }

    return this.config.appTitle;
  }

}
