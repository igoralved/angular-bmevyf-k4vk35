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

  cep: Cep | undefined;

  constructor(
    private cepbankservice: CepbankService,
    private formBuilder: FormBuilder
  ) {}

  checkoutForm = this.formBuilder.group({
    campo: '',
    logradouro: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
    ibge: '',
    gia: '',
    ddd: '',
    siafi: '',
  });

  ngOnInit() {}

  onSubmit(): void {
    // Process checkout data here
    //this.ceps = this.cepbankService.clearCeps();
    console.warn('The CEP has been added', this.checkoutForm.value);
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

  addCep() {
    ceps.push({
      id: 1,
      campo: document.getElementById('cep1').toString(),
      logradouro: document.getElementById('cep2').toString(),
      complemento: document.getElementById('cep3').toString(),
      bairro: document.getElementById('cep4').toString(),
      localidade: document.getElementById('cep5').toString(),
      uf: document.getElementById('cep6').toString(),
      ibge: document.getElementById('cep7').toString(),
      gia: document.getElementById('cep8').toString(),
      ddd: document.getElementById('cep9').toString(),
      siafi: document.getElementById('cepa').toString(),
    });
  }
}
