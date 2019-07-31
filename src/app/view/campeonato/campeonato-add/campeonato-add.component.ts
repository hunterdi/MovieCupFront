import { FilmeCampeonato } from './../../../models/filmeCampeonato';
import { Filme } from './../../../models/filme';
import { Campeonato } from './../../../models/campeonato';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  FormControl,
  Validators
} from '@angular/forms';
import { of, Observable } from 'rxjs';
import { SystemValidator } from 'src/app/system/validators/SystemValidator';
import { CampeonatoService } from 'src/app/system/services/campeonato.service';
import { FilmeService } from 'src/app/system/services/filme.service';

@Component({
  selector: 'app-campeonato-add',
  templateUrl: './campeonato-add.component.html',
  styleUrls: ['./campeonato-add.component.css']
})
export class CampeonatoAddComponent implements OnInit {
  form: FormGroup;
  filmes = [];

  constructor(
    private fb: FormBuilder,
    private campeonatoService: CampeonatoService,
    private filmeService: FilmeService
  ) {}

  private CreateForm(): void {
    this.form = this.fb.group({
      txtNomeCampeonato: ['', Validators.required],
      chkbFilmes: new FormArray([], SystemValidator.TotalSelectedCheckboxes())
    });

    of(this.GetFilmes()).subscribe(filmes => {
      filmes.subscribe(response => {
        this.PreencherFilmes(response);
        this.CreateCheckBoxes(response);
      });
    });
  }

  private PreencherFilmes(filmes: Filme[]): void {
    filmes.forEach(obj => {
      this.filmes.push(obj);
    });
  }

  private CriarCampeonato(): void {
    const selectedFilmesIds = this.form.value.chkbFilmes
      .map((v, i) => (v ? this.filmes[i].id : null))
      .filter(v => v !== null);

    const filmesSelected = this.FilterFilmesSelected(selectedFilmesIds);

    const campeonato = new Campeonato();
    campeonato.nome = this.form.value.txtNomeCampeonato;
    campeonato.campeonatoFilmes = this.CreateFilmeCampeonatos(filmesSelected);
    this.campeonatoService.CriarCampeonato(campeonato);
    this.form.reset();
  }

  private CreateFilmeCampeonatos(filmes: Filme[]): FilmeCampeonato[]
  {
    const response = Array<FilmeCampeonato>();

    filmes.forEach((v, i) => {
      const filmeCampeonato = new FilmeCampeonato();
      filmeCampeonato.filme = v;

      response.push(filmeCampeonato);
    });
    return response;
  }

  private FilterFilmesSelected(selectedFilmesIds: number[]): Filme[] {
    return this.filmes.filter((o, i) => {
      return selectedFilmesIds.find(e => e === o.id);
    });
  }

  private GetFilmes(): Observable<Filme[]> {
    return this.filmeService.GetFilmes();
  }

  public CreateCheckBoxes(filmes: Filme[]): void {
    filmes.map((o, i) => {
      const control = new FormControl(i === 0);
      (this.form.controls.chkbFilmes as FormArray).push(control);
    });
  }

  ngOnInit() {
    this.CreateForm();
  }
}
