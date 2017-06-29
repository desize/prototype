import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewComponent } from './new/new.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutosComponent,
    children: [
    	{
    		path: 'new',
    		component: NewComponent
    	},
    	{
    		path: ':id',
    		component: ProdutoComponent
    	}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
