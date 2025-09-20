import { Component, input, output } from '@angular/core';
import { RouterLink } from "../../../../node_modules/@angular/router/router_module.d";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  tituloLoja = input.required<string>(); //<app-header [tituloLoja]="Titulo"></app-header>

  textoSobre = output<string>();

  enviarSobre() {
    this.textoSobre.emit("Técnicas de Programação 1. Desenvolvido por Luiz Víctor"); // espera variaveis do mesmo tipo 
  }

}
