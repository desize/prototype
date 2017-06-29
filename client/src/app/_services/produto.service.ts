import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class ProdutoService {

  constructor(private http: Http) { }

  getProdutos(): Observable<any> {
  	return this.http.get('http://127.0.0.1:8000/api/produtos').map((response: Response) => {
  		return response.json().produtos;
  	});
  }
}
