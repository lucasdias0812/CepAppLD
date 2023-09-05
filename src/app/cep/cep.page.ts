import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cep',
  templateUrl: 'cep.page.html',
  styleUrls: ['cep.page.scss'],
})
export class CepPage {
  cep: string = '';;
  endereco: any;

  constructor(private http: HttpClient) {}

  consultarCEP() {
    if (this.cep) {
      const url = `https://viacep.com.br/ws/${this.cep}/json/`;

      this.http.get(url).subscribe((data: any) => {
        this.endereco = data;
      });
    }
  }
}

