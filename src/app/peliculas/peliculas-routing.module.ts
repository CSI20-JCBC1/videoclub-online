import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PelisComponent } from './pelis/pelis.component';
import { FormPeliculaComponent } from './form-pelicula/form-pelicula.component';

const routes: Routes = [
  {
    path:'pelis', component: PelisComponent
  },
  {
    path: 'pelis/edit/:idPelicula', component:FormPeliculaComponent
  },
  {
    path: '**', redirectTo:'pelis', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
