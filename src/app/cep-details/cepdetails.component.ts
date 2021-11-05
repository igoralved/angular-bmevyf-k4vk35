import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cep, ceps } from '../ceps';
import { CepbankService } from '../cepbank.service';

@Component({
  selector: 'app-cepdetails',
  templateUrl: './cepdetails.component.html',
  styleUrls: ['./cepdetails.component.css'],
})
export class CepdetailsComponent implements OnInit {
  cep: Cep | undefined;
  constructor(private route: ActivatedRoute, private cepbank: CepbankService) {}

  ngOnInit() {
    // First get the cep id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const cepCampoFromRoute = String(routeParams.get('cepCampo'));

    // Find the cep that correspond with the 'campo' provided in route.

    this.cepbank
      .getByCampo(cepCampoFromRoute)
      .subscribe((cep) => (this.cep = cep));
  }

  addToBank(cep: Cep) {
    this.cepbank.add(cep);
    window.alert('cep added with success!');
  }
}
