import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PelisComponent } from '../peliculas/pelis/pelis.component';
import { SeriesComponent } from './series/series.component';

const routes: Routes = [
  {
    path:'series', component: SeriesComponent
  },
  {
    path: '**', redirectTo:'series', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
