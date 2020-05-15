import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/peliculas.service';
import { from } from 'rxjs';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: String;
  public peliculas: Pelicula[];
  public favorita: Pelicula;
  public fecha: any;

  constructor(
    private _peliculaService: PeliculaService
  ) { //se coloca _ siempre cuando se crea una propiedad vinculada a un servicio
    this.titulo = "Componente Películas";
    this.peliculas = this._peliculaService.getPeliculas(); 
    this.fecha = new Date(2020, 5, 24);
  }//no se le debe ingresar logica a este menodo (para precargar cosas), es para asignar valores a las propiedades y precargar valores

  ngOnInit(): void {
    console.log(this.peliculas);
    console.log("Componente iniciado !!!");
    console.log(this._peliculaService.holaMundo);
  }//aca se debe ingresar la logica

  ngDoCheck(): void {
    console.log("DoCheck Lanzado !!!");//se ejecuta en cada cambio

  }//aca se debe ingresar la logica
  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado !!!";
  }

  ngOnDestroy(){
    console.log("EL COMPONENTE SE ELIMINARA DE LA EJECUCIÓN");
  }//elimina el componente

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }
  
}
