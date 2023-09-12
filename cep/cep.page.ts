import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cep',
  templateUrl: 'cep.page.html',
  styleUrls: ['cep.page.scss'],
})
export class CepPage {
  cep: string = '';
  endereco: any;
  uf: string = '';
  localidade: string = '';
  logradouro: string = '';
  endereco2: any;
  enderecoFinal: any;

  constructor(private http: HttpClient) {}
  consultarCEP() {
    if (this.cep) {
      const url = `https://viacep.com.br/ws/${this.cep}/json/`;
      this.http.get(url).subscribe((data: any) => {
        this.endereco = data;
      });
    }
    }

    consultar2(){
       if (this.uf && this.localidade && this.logradouro){
        const ufEncoded = encodeURIComponent(this.uf);
        const localidadeEncoded = encodeURIComponent(this.localidade);
        const logradouroEncoded = encodeURIComponent(this.logradouro);
        const url2 = `https://viacep.com.br/ws/${this.uf}/${this.localidade}/${this.logradouro}/json/`;

        this.http.get(url2).subscribe((data:any) =>{
          this.endereco2 = data;
        });
    }
  }
}
