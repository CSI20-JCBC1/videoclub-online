import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PelisComponent } from './pelis/pelis.component';
import { FormPeliculaComponent } from './form-pelicula/form-pelicula.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PelisComponent,
    FormPeliculaComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    ReactiveFormsModule
  ]
})
export class PeliculasModule { }
