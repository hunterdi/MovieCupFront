import { Campeonato } from './campeonato';
import { Disputa } from './disputa';

export class Classificacao {
  id: number;
  campeonato: Campeonato;
  disputa: Disputa[];

  constructor() {
    this.disputa = Array<Disputa>();
  }
}
