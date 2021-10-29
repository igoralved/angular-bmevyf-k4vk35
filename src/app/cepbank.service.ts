import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
    return this.http.get<Cep[]>('/ceps');
  }
}
