import { Component, OnInit } from '@angular/core';
import { CepbankService } from '../cepbank.service';
import { Cep, ceps } from '../ceps';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cep-add',
  templateUrl: './cep-add.component.html',
  styleUrls: ['./cep-add.component.css'],
})
export class CepAddComponent implements OnInit {
  ceps = this.cepbankservice.getCeps();

  checkoutform = this.formbuilder.group({
    cep: '',
    logradouro: '',
  });

  constructor(
    private cepbankservice: CepbankService,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit() {}

  onSubmit(): void {
    // Process checkout data here
    //this.ceps = this.cepbankService.clearCeps();
    console.warn('The CEP has been added', this.checkoutform.value);
    this.checkoutform.reset();
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
}
