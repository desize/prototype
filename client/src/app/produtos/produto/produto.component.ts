import { Component, OnInit, Input } from '@angular/core';

import { Produto } from './produto.interface';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

	@Input() produto: Produto;

	constructor() { }

	ngOnInit() {
	}

}
