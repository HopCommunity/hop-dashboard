import { Component } from '@angular/core';

@Component({
  selector: 'dash-tiny-mce-page',
  template: `
    <nb-card>
      <nb-card-header>
        Tiny MCE
      </nb-card-header>
      <nb-card-body>
        <dash-tiny-mce></dash-tiny-mce>
      </nb-card-body>
    </nb-card>
  `,
})
export class TinyMCEComponent {}
