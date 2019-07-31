import { Classificacao } from './classificacao';
import { Filme } from './filme';

export class Disputa {
  id: number;
  desafiante: Filme;
  desafiado: Filme;
  vencedor: Filme;
  classificacao: Classificacao;
}
