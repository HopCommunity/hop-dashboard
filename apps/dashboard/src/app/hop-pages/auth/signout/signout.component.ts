import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
