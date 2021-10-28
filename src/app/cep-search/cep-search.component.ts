import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CepdetailsComponent } from '../cep-details/cepdetails.component';
import { CepListComponent } from '../cep-list/cep-list.component';
import { CepbankService } from '../cepbank.service';
import { Cep, ceps } from '../ceps';

@Component({
  selector: 'app-cep-search',
  templateUrl: './cep-search.component.html',
  styleUrls: ['./cep-search.component.css'],
})
export class CepSearchComponent implements OnInit {
  ceps = this.cepbankService.getCeps();

  checkoutForm = this.formBuilder.group({
    id: '',
  });

  constructor(
    private route: Router,
    private cepbankService: CepbankService,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {}

  onSubmit(): void {
    // Process checkout data here
    //this.ceps = this.cepbankService.clearCeps();
    console.warn('The order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  valido(cep: Cep) {
    if (cep.campo.length != 8) {
      return false;
    }
    for (var i = 0; i < cep.campo.length; i++) {
      switch (cep.campo[i]) {
        case '0':
          break;
        case '1':
          break;
        case '2':
          break;
        case '3':
          break;
        case '4':
          break;
        case '5':
          break;
        case '6':
          break;
        case '7':
          break;
        case '8':
          break;
        case '9':
          break;
        default:
          return false;
      }
    }
    return true;
  }

  getCep(cep: String) {
    for (var i = 0; i < ceps.length; i++) {
      if (cep == ceps[i].id.toString() && this.valido(ceps[i])) {
        this.route.navigate(['/ceps', cep]);
      }
    }
  }

  GoToAddCep() {
    this.route.navigate(['/add']);
  }
}
