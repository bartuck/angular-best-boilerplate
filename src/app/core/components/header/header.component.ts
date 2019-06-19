import { Component, OnInit } from '@angular/core';

import { AppController } from '../../../app.controller';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends AppController implements OnInit {

  ngOnInit() {
  }

}
