import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../../servicios/firebase.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-pelicula',
  templateUrl: './form-pelicula.component.html',
  styleUrls: ['./form-pelicula.component.css']
})
export class FormPeliculaComponent implements OnInit {

  formPelicula=this.fb.group({
    titulo:['', Validators.required],
    director:[''],
    genero:[''],
    publico:[''],
    duracion:[''],
    year:[''],


  });

  nueva: boolean = false;
  documentId:string='';

  constructor(private fb:FormBuilder,private location: Location, private ruta:ActivatedRoute, private fire: FirebaseService) { }

  ngOnInit(): void {


    this.documentId=this.ruta.snapshot.paramMap.get('idPelicula')!;
    this.fire.getOne('peliculas', this.documentId).subscribe((resp:any)=>{
      this.formPelicula.setValue(resp.payload.data())
    });

    this.ruta.params.subscribe( params => {
      if(params['id']){
        this.documentId = String(params['id']);
        this.nueva = false;
        this.fire.getOne('peliculas', this.documentId).subscribe(
          (resp: any) => {
            this.formPelicula.setValue(resp.payload.data());
          }
        )
      }else{
        this.nueva=true;
      }
    });  
  }

  guardar(){
    if(this.nueva){
      // guardar datos con crearMascota
      this.fire.create('peliculas', this.formPelicula.value).then(
        () => {
          
          this.cancel();
        }, (error: any) => {
          alert("Error: " + error);
        }
      )
    }else{
      // llamar o invocar actualizar mascota
      this.fire.update('peliculas', this.documentId, this.formPelicula.value).then(
        () => {
          this.cancel();
        },
        (error: any) => {
          alert('Error: ' + error);
        }
      )
    }
  }

  cancel(){
    this.location.back();
  }

}



