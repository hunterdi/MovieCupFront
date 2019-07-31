import { MovieApiConstants } from 'src/app/system/constants/movie-api-constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Filme } from 'src/app/models/filme';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  constructor(private http: HttpClient) {}

  public GetFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(MovieApiConstants.CONSULTAR_TODOS_FILMES).pipe(shareReplay());
  }
}
