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

  mySwiper: Swiper;

  constructor() {}

  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
    });
  }

  ngOnInit(): void {
  }

  onSlideNext() {
    this.mySwiper.slideNext();
  }

  onSlidePrev() {
    this.mySwiper.slideNext();
  }
}
