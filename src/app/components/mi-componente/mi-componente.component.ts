import { Component } from '@angular/core';

@Component ({
    selector: 'mi-componente',//importante, indica el nombre de la etiqueta
    templateUrl: `./mi-componente.component.html`//importante
})

export class MiComponente{
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
        this.titulo = "Hola mundo soy MI COMPONENTE";
        this.comentario = "Este es mi primer componente";
        this.year = 2020;
        this.mostrarPeliculas = true;

        console.log("Componente mi-componente cargado !!")
        console.log(this.titulo, this.comentario, this.year);
    }//despues se carga en app.module.ts para poder llamarlo en cualquier parte de la app

        ocultarPeliculas(){
            this.mostrarPeliculas = false;
        }
}