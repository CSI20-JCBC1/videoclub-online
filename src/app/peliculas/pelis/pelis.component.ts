import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../servicios/firebase.service';

@Component({
  selector: 'app-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.css']
})
export class PelisComponent implements OnInit {

  coleccion='peliculas';
  peliculas:any[]=[];


  constructor(private firebase:FirebaseService) { }

  ngOnInit(): void {
    this.firebase.getAll(this.coleccion).subscribe((resp: any)=>{
      this.peliculas=[];
      resp.forEach((peliculaSnapshot:any) => {
        this.peliculas.push(
          {
            documentId: peliculaSnapshot.payload.doc.id,
            data:peliculaSnapshot.payload.doc.data()
          }
        )
        
      });
    })
  }

}
