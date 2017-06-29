import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NewComponent } from './new/new.component';
import { ProdutoComponent } from './produto/produto.component';

import { ProdutosRoutingModule } from './produtos.routing.module';
import { ProdutosComponent } from './produtos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ProdutosRoutingModule
  ],
  declarations: [
  	NewComponent, 
  	ProdutoComponent, 
  	ProdutosComponent
  ]
})
export class ProdutosModule { }
