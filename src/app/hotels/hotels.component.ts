import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotels = [
    {
      name: 'Hotel Santiago',
      image: '/src/assets/img/466861409.jpg',
      description: 'Un lugar acogedor en el corazón de Santiago.'
    },
    {
      name: 'Hotel V Región',
      image: 'assets/hotel-v-region.jpg',
      description: 'Disfruta de la costa en nuestro hotel de la V Región.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
