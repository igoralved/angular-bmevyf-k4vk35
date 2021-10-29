import { Component, NgIterable, OnInit } from '@angular/core';
import { CepbankService } from '../cepbank.service';
import { Cep, ceps } from '../ceps';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cep-add',
  templateUrl: './cep-add.component.html',
  styleUrls: ['./cep-add.component.css'],
})
export class CepAddComponent implements OnInit {
  ceps = this.cepbankservice.getAll();

  cep: Cep | undefined;

  constructor(
    private http: HttpClient,
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

  addCep(
    a: String,
    b: String,
    c: String,
    d: String,
    e: String,
    f: String,
    g: String,
    h: String,
    i: String,
    j: String
  ) {
    var aux = {
      campo: a,
      logradouro: b,
      complemento: c,
      bairro: d,
      localidade: e,
      uf: f,
      ibge: g,
      gia: h,
      ddd: i,
      siafi: j,
    };

    return this.http.post<NgIterable<any> | null | undefined>(
      '/assets/ceps.json',
      aux
    );
  }
}
