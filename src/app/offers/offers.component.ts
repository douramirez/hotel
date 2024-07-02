import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  offers = [
    {
      title: 'Descuento de Invierno',
      image: 'assets/offer-winter.jpg',
      description: 'Disfruta de un 20% de descuento en nuestras habitaciones durante el invierno.'
    },
    {
      title: 'Oferta Especial de Verano',
      image: 'assets/offer-summer.jpg',
      description: 'Aprovecha un 15% de descuento en el restaurante y en el spa durante tu estancia de verano.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
