import { HttpClient } from '@angular/common/http';
import { Injectable, NgIterable } from '@angular/core';
import { Observable } from 'rxjs';
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

  getAll(): Observable<Cep[]> {
    return this.http.get<Cep[]>('/assets/ceps.json');
  }

  getById(id: String): Observable<Cep[]> {
    return this.http.get<Cep[]>('/assets/ceps/?name=${' + id + '}');
  }
}
