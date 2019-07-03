import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DummyHomeComponent } from '../test/components/dummy-home.component';
import { DummyLoginComponent } from '../test/components/dummy-login.component';
import { DummySearchComponent } from '../test/components/dummy-search.component';
import { testingRoutes } from '../test/mocks/routes.mock';
import { AppComponent } from './app.component';
import { appConfig } from './core/config/app-config.const';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let titleService: Title;
  let router: Router;
  let route: ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(testingRoutes)],
      declarations: [
        AppComponent,
        DummyHomeComponent,
        DummySearchComponent,
        DummyLoginComponent
      ],
      providers: [Title],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    titleService = TestBed.get(Title);
    router = TestBed.get(Router);
    route = TestBed.get(ActivatedRoute);

    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  describe('#ngOnInit', () => {
    beforeEach(() => {
      component.ngOnInit();
    });

    it('should set the browser tab title', () => {
      router.navigate(['/search']).then(() => {
        const currTitle = titleService.getTitle();
        const expectedTitle = `Search${appConfig.browserTabTitleDelimiter}${appConfig.appTitle}`;

        expect(currTitle).toEqual(expectedTitle);
      });
    });

    it('should set the browser tab title as the application title', () => {
      router.navigate(['/']).then(() => {
        const currTitle = titleService.getTitle();
        const expectedTitle = `${appConfig.appTitle}`;

        expect(currTitle).toEqual(expectedTitle);
      });
    });
  });
});
