export class Jogador{
  private _nome: string;
  private _selecao: string;
  private _numero: number

  constructor(nome: string, selecao: string, numero:number) {
    this._nome = nome;
    this._selecao = selecao;
    this._numero = numero;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get selecao(): string {
    return this._selecao;
  }

  set selecao(value: string) {
    this._selecao = value;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }
}
