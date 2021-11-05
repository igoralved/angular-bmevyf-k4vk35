import { HttpClient } from '@angular/common/http';
import { Injectable, NgIterable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
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

  showErrorMessage() {
    window.alert('Campo inválido ou não encontrado!');
  }

  mostraerro(e: any): Observable<any> {
    this.showErrorMessage();
    return EMPTY;
  }

  getAll(): Observable<Cep[]> {
    return this.http.get<Cep[]>('/assets/ceps.json');
  }

  getByCampo(campo: string): Observable<Cep> {
    let url = '/assets/ceps.json/?name=${campo}';
    return this.http.get<Cep>(url).pipe(
      map((c) => c),
      catchError((e) => this.mostraerro(e))
    );
  }
}
