import { Component, computed, inject, signal } from '@angular/core';
import { CardProduto } from "../../../featuress/produtos/card-produto/card-produto";
import { Produto } from '../../../model/produto';
import { ProdutoService } from '../services/produto.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  private produtoService = inject(ProdutoService);
  private router = inject(Router);

  private _produtos = toSignal<Produto[], Produto[]>(
    this.produtoService.listar(),
    { initialValue: [] }
  );
  public get produtos() {
    return this._produtos;
  }
  public set produtos(value) {
    this._produtos = value;
  }


  apenasPromo = signal(false);

  prodExibidos = computed(() => this.apenasPromo() ? this.produto.filter((p: { promo: any; }) => p.promo) : this.produtos);
  produto: any | undefined | undefined;

  alternarPromo() {
    this.apenasPromo.update(p => !p); // altenar função de promoção 
  }

  onAddProduct(produto: {id: number, quantity: number}) {
    alert(`Produto ${produto.id}, ${produto.quantity} unidades`);
  }

  onViewProduct (id: number) {
    this.router.navigate(['/produtos', id])
  }


}
