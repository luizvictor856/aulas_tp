import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../../../model/produto';

@Component({
  selector: 'app-produto-detalhe',
  imports: [],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})
export class ProdutoDetalhe {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private produtoService = inject(ProdutoService);

  loading = signal(true); // simulará um carregamento 
  produto = signal<Produto | undefined>(undefined);

  constructor () {
    this.route.paramMap.subscribe ( pm => {
      const id = pm.get('id') ? Number(pm.get('id')) : NaN;
      if(isNaN(id)) { // foi passado um id, mas deu ruim
         this.produto.set(undefined);
         this.loading.set(false);
         return;
      }
       this.loading.set(true);
        this.produtoService.getById (id).subscribe(p => {
          this.produto.set(p);
          this.loading.set(false);
        }); 
      }
    );
  }

  voltar () {
    this.router.navigate(['/produtos']);
  }

}
