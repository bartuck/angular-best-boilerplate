import { Component } from '@angular/core';

import { AppController } from './app.controller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends AppController {
  title = this.trans.title;
}
