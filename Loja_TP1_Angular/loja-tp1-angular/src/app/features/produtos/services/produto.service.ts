import { inject, Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Produto } from '../../../model/produto';
import { LoggerService } from '../../../core/services/logger/logger.service';


// logger inicial 

@Injectable({ // logger service (injetavel)
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);
  private readonly listaMock: Produto[] = [
    {
      id: 1,
      nome: 'Produto 1',
      descricao: '1',
      preco: 79.90,
      promo: true,
      estado: 'usado'
    },

    {
      id: 2,
      nome: 'Produto 2',
      descricao: '1',
      preco: 79.90,
      estado: 'esgotado'
    },

    {
      id: 3,
      nome: 'Produto 3',
      descricao: '1',
      preco: 79.90,
      estado: 'novo'

    },

    {
      id: 4,
      nome: 'Produto 4',
      descricao: '1',
      preco: 79.90,
      estado: 'novo'

    }
    
  ]

  listar(): Observable<Produto[]> {
    this.logger.info('[ProdutoService] - Listando produtos');
    return of(this.lostaMock).pipe(delay(1000));
  }

}
