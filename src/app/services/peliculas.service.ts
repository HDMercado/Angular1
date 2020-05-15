import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService{
    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman", 2018, "https://cronicaglobal.elespanol.com/uploads/s1/61/11/51/3/main-700b9bff30_11_1000x528.jpeg"),
            new Pelicula("Avengers",2019, "https://media.metrolatam.com/2019/04/29/avengersendgamep-0f0fed9829b61b66493f0a184cf91ffb-1200x600.jpg"),
            new Pelicula("Batman vs Superman",2015, "https://www.quantummx.com/wp-content/uploads/2016/03/batman-668x445.jpg")
           ];
    }

    holaMundo(){
        return 'Hola mundo desde el Servicio de Angular !!!';
    }
    getPeliculas(){
        return this.peliculas;
    }
}