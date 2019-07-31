import { Component, OnInit } from '@angular/core';
import { CampeonatoService } from 'src/app/system/services/campeonato.service';
import { Campeonato } from 'src/app/models/campeonato';

@Component({
  selector: 'app-campeonato',
  templateUrl: './campeonato.component.html',
  styleUrls: ['./campeonato.component.css']
})
export class CampeonatoComponent implements OnInit {
  campeonatos = [];

  constructor(private campeonatoService: CampeonatoService) {}

  ngOnInit() {
    this.campeonatoService.GetCampeonatos().subscribe(value => {
      this.PreencherCampeonatos(value);
    });
  }

  private PreencherCampeonatos(campeonatos: Campeonato[]): void {
    campeonatos.forEach(obj => {
      this.campeonatos.push(obj);
    });
  }
}
