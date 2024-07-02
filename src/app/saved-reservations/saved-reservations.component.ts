import { Component, OnInit } from '@angular/core';
import { Reservation } from '../reservation.model';

@Component({
  selector: 'app-saved-reservations',
  templateUrl: './saved-reservations.component.html',
  styleUrls: ['./saved-reservations.component.css']
})
export class SavedReservationsComponent implements OnInit {
  reservations: Reservation[] = [];

  ngOnInit(): void {
    this.reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
  }
}
