import { Component, model } from '@angular/core';

@Component({
  selector: 'app-quantidade-controle',
  imports: [],
  templateUrl: './quantidade-controle.html',
  styleUrl: './quantidade-controle.css'
})
export class QuantidadeControle {

  // imput --> [nome]
  // output --> (nome)
  // model --> [(contdor)] = "signal" | "banana em uma caixa"
  contador = model<number>(1);


  incrementar() {
    this.contador.update(valor => valor+1);
  }


  decrementar() {
    this.contador.set(Math.max(1, this.contador() - 1)); 
    // this.contador.update(v => Math.max (1, v-1)); | outra forma
  }


}
