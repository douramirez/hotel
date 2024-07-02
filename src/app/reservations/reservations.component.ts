import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { Reservation } from '../reservation.model';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent {
  hotels = ['Hotel Santiago', 'Hotel V Región'];
  reservation: Reservation = {
    hotel: '',
    arrivalDate: '',
    departureDate: '',
    guests: 1
  };

  constructor(public dialog: MatDialog) {}

  onSubmit(): void {
    const savedReservations: Reservation[] = JSON.parse(localStorage.getItem('reservations') || '[]');
    savedReservations.push(this.reservation);
    localStorage.setItem('reservations', JSON.stringify(savedReservations));

    this.dialog.open(ConfirmationDialogComponent, {
      data: this.reservation
    });

    this.reservation = {
      hotel: '',
      arrivalDate: '',
      departureDate: '',
      guests: 1
    };
  }
}
