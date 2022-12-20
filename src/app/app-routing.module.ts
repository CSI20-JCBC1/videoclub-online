import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component : HomeComponent
  },
  {
    path: 'peliculas', loadChildren:() => import('./peliculas/peliculas.module').then(m=>m.PeliculasModule)
  },
  {
    path: 'series', loadChildren:() => import('./series/series.module').then(m=>m.SeriesModule)
  },
  {
    path: '**', redirectTo:'/', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
