import { Classificacao } from './classificacao';
import { FilmeCampeonato } from './filmeCampeonato';

export class Campeonato {
  id: number;
  nome: string;
  campeonatoFilmes: FilmeCampeonato[];
  classificacao: Classificacao[];

  constructor() {
    this.campeonatoFilmes = Array<FilmeCampeonato>();
    this.classificacao = Array<Classificacao>();
  }
}
