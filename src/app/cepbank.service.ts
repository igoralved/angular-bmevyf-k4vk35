import { HttpClient } from '@angular/common/http';
import { Injectable, NgIterable } from '@angular/core';
import { Cep, ceps } from './ceps';
@Injectable({ providedIn: 'root' })
export class CepbankService {
  ceps: Cep[] = ceps;

  constructor(private http: HttpClient) {}

  add(cep: Cep) {
    this.ceps.push(cep);
  }

  getCeps() {
    return this.ceps;
  }

  clearCeps() {
    this.ceps = [];
    return this.ceps;
  }

  getAll() {
    /*return this.http.get<{
      id: number;
      campo: string;
      logradouro: string;
      complemento: string;
      bairro: string;
      localidade: string;
      uf: string;
      ibge: string;
      gia: string;
      ddd: string;
      siafi: string;
    }>('/assets/ceps.json');*/
    return this.http.get<NgIterable<any> | null | undefined>(
      '/assets/ceps.json'
    );
  }
}
