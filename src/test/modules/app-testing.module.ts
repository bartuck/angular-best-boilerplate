import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserTestingModule } from '@angular/platform-browser/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';

import { DummyAppComponent } from '../components/dummy-app.component';
import { DummyHomeComponent } from '../components/dummy-home.component';
import { DummySearchComponent } from '../components/dummy-search.component';
import { DummyLoginComponent } from '../components/dummy-login.component';

export const testingRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: DummyHomeComponent, data: { label: 'Home'} },
  { path: 'search', component: DummySearchComponent, data: { label: 'Search'} },
  { path: 'log-in', component: DummyLoginComponent }
];


@NgModule({
  imports: [
    BrowserTestingModule,
    NoopAnimationsModule,
    RouterTestingModule.withRoutes(testingRoutes),
    HttpClientTestingModule,
  ],
  declarations: [
    DummyAppComponent,
    DummyHomeComponent,
    DummyLoginComponent,
    DummySearchComponent,
  ],
  entryComponents: [],
  providers: [],
  exports: [
    NoopAnimationsModule,
    RouterTestingModule,
  ]
})
export class AppTestingModule {
}
