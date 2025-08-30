import { Component } from '@angular/core';
import { CardProduto } from "../../../featuress/produtos/card-produto/card-produto";
import { Produto } from '../../../model/produto';

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: Produto [] = [
    {
      id: 1,
      nome: 'Produto 1',
      descricao:'1',
      preco: 79.90,
      promo: true
    },

    {
      id: 2,
      nome: 'Produto 2',
      descricao:'1',
      preco: 79.90
    },

    {
      id: 3,
      nome: 'Produto 3',
      descricao:'1',
      preco: 79.90

    },
     
    {
      id: 4,
      nome: 'Produto 4',
      descricao:'1',
      preco: 79.90

    }

  ]

  onAddProduct(produto: {id: number, quantity: number}) {
    alert(`Produto ${produto.id}, ${produto.quantity} unidades`);
  }

}
