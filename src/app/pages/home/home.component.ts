import { Component, HostListener, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public movies: Movie[] = [];
  public moviesSlideShow: Movie[] = [];

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
    const max =  (document.documentElement.scrollHeight || document.body.scrollHeight);

    if (pos > max) {
      this.peliculasService.getCartelera().subscribe(resp => {
        this.movies.push(...resp.results);
      });
      console.log('Llamar servicio');
    }
  }

  constructor( private peliculasService: PeliculasService ) {
  }

  ngOnInit(): void {

    this.peliculasService.getCartelera()
    .subscribe(resp => {
      this.movies = resp.results;
      this.moviesSlideShow = resp.results;
    })

  }

}


/*

Decorador (de una función) @Hostlistener: Escucha un evento propio del host: Escucho el window --> Scroll
TAP: Dispara un efecto secundario. Se ejecuta el código cada vez el observable emite un valor. EL tab no modifica ni altera nada (es un pipe)

*/
