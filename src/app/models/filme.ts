import { FilmeCampeonato } from './filmeCampeonato';

export class Filme {
  id: number;
  codigo: string;
  titulo: string;
  ano: number;
  nota: number;
  filmeCampeonatos: FilmeCampeonato[];

  constructor() {
    this.filmeCampeonatos = Array<FilmeCampeonato>();
  }
}
