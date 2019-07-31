import { RouteConstants } from './system/constants/route-constants';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: `${RouteConstants.CRIAR_CAMPEAONATO}`,
    pathMatch: 'full'
  },
  {
    path: `${RouteConstants.CRIAR_CAMPEAONATO}`,
    loadChildren: './view/view.module#ViewModule'
  },
  {
    path: `${RouteConstants.CONSULTAR_CAMPEONATOS}`,
    loadChildren: './view/view.module#ViewModule'
  },
  {
    path: `${RouteConstants.CONSULTAR_FINALISTAS}`,
    loadChildren: './view/view.module#ViewModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
