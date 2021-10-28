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
    const cepIdFromRoute = Number(routeParams.get('cepId'));

    // Find the cep that correspond with the id provided in route.
    this.cep = ceps.find((cep) => cep.id === cepIdFromRoute);
  }

  addToBank(cep: Cep) {
    this.cepbank.add(cep);
    window.alert('cep added with success!');
  }
}
