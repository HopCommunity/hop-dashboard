import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
  selector: 'dash-pages',
  styleUrls: ['pages.component.scss'],
  template: `
    <dash-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </dash-one-column-layout>
  `,
})
export class PagesComponent {
  menu = MENU_ITEMS;
}
