import { environment } from './../../../environments/environment';

const env = environment;

export class MovieApiConstants {
  public static readonly CRIAR_CAMPEAONATO = `${env.hostApi}/campeonato`;
  public static readonly CONSULTAR_TODOS_FILMES = `${env.hostApi}/filme`;
  public static readonly CONSULTAR_TODOS_CAMPEONATOS = `${env.hostApi}/campeonato`;
  public static readonly CONSULTA_FINALISTAS = `${env.hostApi}/campeonato/finalistas/`;
}
