import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
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
    campo: '',
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

  valido(campo: string) {
    if (campo.length != 8) {
      return false;
    }
    for (var i = 0; i < campo.length; i++) {
      switch (campo[i]) {
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

  getCep(campo: string) {
    if (this.valido(campo)) {
      this.route.navigate(['/ceps', campo]);
    }
  }

  GoToAddCep() {
    this.route.navigate(['/add']);
  }
}
