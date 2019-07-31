import { FinalistasComponent } from './disputa/finalistas/finalistas.component';
import { RouteConstants } from './../system/constants/route-constants';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CampeonatoAddComponent } from './campeonato/campeonato-add/campeonato-add.component';
import { CampeonatoComponent } from './campeonato/campeonato/campeonato.component';

const routes: Routes = [
  {
    path: `${RouteConstants.CRIAR_CAMPEAONATO}`,
    component: CampeonatoAddComponent
  },
  {
    path: `${RouteConstants.CONSULTAR_CAMPEONATOS}`,
    component: CampeonatoComponent
  },
  {
    path: `${RouteConstants.CONSULTAR_FINALISTAS}`,
    component: FinalistasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {}
