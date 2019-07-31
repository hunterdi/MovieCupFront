import { FilmeService } from './../system/services/filme.service';
import { CampeonatoService } from 'src/app/system/services/campeonato.service';
import { ComponentsModule } from './../_common/components.module';
import { NgModule } from '@angular/core';
import { ViewRoutingModule } from './view-routing.module';
import { CampeonatoAddComponent } from './campeonato/campeonato-add/campeonato-add.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CampeonatoComponent } from './campeonato/campeonato/campeonato.component';
import { FinalistasComponent } from './disputa/finalistas/finalistas.component';

@NgModule({
  declarations: [CampeonatoAddComponent, CampeonatoComponent, FinalistasComponent],
  exports: [
    CampeonatoAddComponent,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  imports: [
    ViewRoutingModule,
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [CampeonatoService, FilmeService],
  bootstrap: [CampeonatoAddComponent]
})
export class ViewModule {}
