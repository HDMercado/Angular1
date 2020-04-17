import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: String;

  constructor() { 
    this.titulo = "Componente Peliculas";
    console.log("Constructor lanzado !!!");
  }//no se le debe ingresar logica a este menodo (para precargar cosas), es para asignar valores a las propiedades y precargar valores

  ngOnInit(): void {
    console.log("Componente iniciado !!!");
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

}
