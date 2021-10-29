import { Component, OnInit } from '@angular/core';
import { CepbankService } from '../cepbank.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.css'],
})
export class CepComponent implements OnInit {
  ceplist = this.ceps.getAll();
  constructor(private ceps: CepbankService) {}


  
  ngOnInit() {}
}
