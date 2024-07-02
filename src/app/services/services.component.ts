import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  services = [
    { name: 'Alojamiento', description: 'Habitaciones confortables y bien equipadas.' },
    { name: 'Restaurante', description: 'Platos deliciosos preparados con ingredientes frescos.' },
    { name: 'Gym', description: 'Instalaciones modernas para mantenerse en forma.' },
    { name: 'Spa', description: 'Servicios de spa para relajarse y rejuvenecer.' },
    { name: 'Piscina', description: 'Piscina al aire libre con vistas impresionantes.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
