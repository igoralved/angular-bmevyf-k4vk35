import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ceps } from '../ceps';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  constructor(private route: Router) {}

  showList() {
    this.route.navigate(['ceps']);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
