import { Injectable } from '@angular/core';//para poder utilizar el servicio fuera
import { HttpClient, HttpHeaders } from '@angular/common/http';//para  manipular las peticiones
import { Observable, from } from 'rxjs';//para recoger los datos que nos devuelve la api
import { Article} from '../models/article';
import { Global } from './global';

@Injectable()
export class ArticleService{
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
    }

    pruebas(){
        return "Soy el servicios de articulos";
    }

    getArticles(last: any = null): Observable<any>{
        var articles;    

        if (last != null) {
            articles = 'articles/true';
            console.log(articles);
        }else{
            articles = 'articles';
        }
        return this._http.get(this.url + articles);
    }

    getArticle(articleId):Observable<any>{
        return this._http.get(this.url + 'article/' + articleId);
    }

    search(searString):Observable<any>{
        return this._http.get(this.url + 'search/' + searString);
    }

    create(article): Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.post(this.url + 'save' , params, {headers: headers});
    }

    update(id, article): Observable<any>{
        let params = JSON.stringify(article);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.put(this.url + 'article/' + id, params,{headers: headers});
    }

    delete(id): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this._http.delete(this.url + 'article/' + id, {headers: headers});
    }
}