import { MovieApiConstants } from 'src/app/system/constants/movie-api-constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Campeonato } from 'src/app/models/campeonato';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CampeonatoService {
  constructor(private http: HttpClient) {}

  public CriarCampeonato(campeonato: Campeonato) {
    console.log(campeonato);
    this.http
      .post(MovieApiConstants.CRIAR_CAMPEAONATO, campeonato)
      .subscribe(response => console.log(response));
  }

  public GetCampeonatos(): Observable<Campeonato[]> {
    return this.http.get<Campeonato[]>(
      MovieApiConstants.CONSULTAR_TODOS_CAMPEONATOS
    ).pipe(shareReplay());
  }

  public GetVencedores(idCampeonato: number): Observable<Campeonato> {
    return this.http.get<Campeonato>(
      MovieApiConstants.CONSULTA_FINALISTAS + idCampeonato
    ).pipe(shareReplay());
  }
}
