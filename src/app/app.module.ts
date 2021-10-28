import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CepListComponent } from './cep-list/cep-list.component';
import { CepdetailsComponent } from './cep-details/cepdetails.component';
import { CepSearchComponent } from './cep-search/cep-search.component';
import { CepbankService } from './cepbank.service';
import { HttpClientModule } from '@angular/common/http';
import { CepAddComponent } from './cep-add/cep-add.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'ceps', component: CepListComponent },
      { path: 'ceps/:cepId', component: CepdetailsComponent },
      { path: '', component: CepSearchComponent },
      { path: 'add', component: CepAddComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CepListComponent,
    CepdetailsComponent,
    CepSearchComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
