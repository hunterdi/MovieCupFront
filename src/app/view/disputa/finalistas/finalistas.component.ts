import { FilmeCampeonato } from './../../../models/filmeCampeonato';
import { Classificacao } from 'src/app/models/classificacao';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CampeonatoService } from 'src/app/system/services/campeonato.service';
import { Campeonato } from 'src/app/models/campeonato';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-finalistas',
  templateUrl: './finalistas.component.html',
  styleUrls: ['./finalistas.component.css']
})
export class FinalistasComponent implements OnInit {
  campeonato: Campeonato;
  filmesCompetindos: FilmeCampeonato[];
  classificacoes: Classificacao[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private campeonatoService: CampeonatoService
  ) {}

  ngOnInit() {
    of(this.GetCampeonato()).subscribe(campeonato => {
      campeonato.subscribe(response => {
        this.campeonato = response;
        this.classificacoes = response.classificacao.sort((a, b) => {
          return b.id - a.id;
        });
        this.filmesCompetindos = response.campeonatoFilmes.sort((a, b) => {
          return a.filme.id - b.filme.id;
        });
      });
    });
  }

  private GetCampeonato(): Observable<Campeonato> {
    let response;

    this.route.params.subscribe(params => {
      response = this.campeonatoService.GetVencedores(params["id"]);
    });

    return response;
  }
}
