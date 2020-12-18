import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import Swiper from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
})
export class SlideshowComponent implements OnInit, AfterViewInit {
  @Input() movies: Movie[];

  constructor() {}

  ngAfterViewInit(): void {
    const mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,

      // // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // // Navigation arrows
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    });
  }

  ngOnInit(): void {
    console.log(this.movies);
  }
}
