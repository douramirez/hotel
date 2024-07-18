import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(public dialog: MatDialog, private _snackBar: MatSnackBar) {}

  onSubmit(): void {
    if (this.isInvalidDepartureDate()) {
      this._snackBar.open('La fecha de salida debe ser posterior a la fecha de llegada', 'Cerrar', {
        duration: 5000,
      });
      return; // Detener la función onSubmit() si la fecha de salida es inválida
    }

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

  // Validación de la fecha de salida
  isInvalidDepartureDate(): boolean {
    if (!this.reservation.arrivalDate || !this.reservation.departureDate) {
      return false;
    }
    return new Date(this.reservation.departureDate) < new Date(this.reservation.arrivalDate);
  }
}
