import { Component, signal } from '@angular/core';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { Banner } from './core/banner/banner';
import { QuantidadeControle } from "./shared/quantidade-controle/quantidade-controle";
import { Produto } from './model/produto';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Banner, QuantidadeControle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  sobre? : string; 
  

  prod: Produto = {
    id: 1,
    nome: 'Produto',
    descricao: '1',
    preco: 79.90
  }
  qtd = signal (1);


  receberSobre(texto: string) {
    this.sobre = texto;
  } 

}
