import { Component } from '@angular/core';
import { Jogador } from '../app/shared/model/jogador';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jogadores';
  novoJogador: Jogador;
  jogadores: Jogador[] = [];
  listarJogadores = false;

  constructor() {
    this.novoJogador = new Jogador('', '', 0);
  }

  cadastrar(): void {
    const index = this.jogadores.findIndex(jogador => jogador.nome === this.novoJogador.nome);
    if (index === -1) {
      this.jogadores.push(this.novoJogador);
    } else {
      this.jogadores[index] = this.novoJogador;
  }
    this.novoJogador = new Jogador('', '', 0);

  }

  remover(jogadorARemover: Jogador): void {
    const indiceARemover = this.jogadores.findIndex(jogador =>
      jogador.nome === jogadorARemover.nome);

    if (indiceARemover >= 0) {
      this.jogadores.splice(indiceARemover, 1);
    }

  }
    toggleListarJogadores() {
      this.listarJogadores = !this.listarJogadores;
    }
}
