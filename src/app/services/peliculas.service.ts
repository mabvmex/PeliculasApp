import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CarteleraResponse, Movie } from '../interfaces/cartelera-response';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PeliculasService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  constructor(private http: HttpClient) {}

  get params() {
    return {
      api_key: '8a8db5f649c0efd39b1d197bb24d998b',
      language: 'es-ES',
      page: this.carteleraPage.toString(),
    };
  }

  getCartelera(): Observable<Movie> {

    if (this.cargando) {
      return of ([]);
    }

    this.cargando = true;
    return this.http.get<CarteleraResponse>( `${this.baseUrl}/movie/now_playing`, {
      params: this.params
    }).pipe(
      map( (resp) => resp.results ),
      tap( () => {
        this.carteleraPage += 1;
        this.cargando = false;
      })
    );

  }
}
