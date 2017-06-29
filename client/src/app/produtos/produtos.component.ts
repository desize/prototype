import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { ProdutoService } from './../_services/produto.service';
import { Produto } from './produto/produto.interface';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

	produtos: Produto[];

	constructor(private produtoService: ProdutoService) { }

	ngOnInit() {
		this.produtoService.getProdutos()
			.subscribe(
				(produtos: Produto[]) => this.produtos = produtos,
				(error: Response) => console.log(error)
		);
	}

}
