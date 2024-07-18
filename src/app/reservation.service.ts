import { Injectable } from '@angular/core';
import { Reservation } from './reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  getReservations(): Reservation[] {
    return JSON.parse(localStorage.getItem('reservations') || '[]');
  }

  saveReservations(reservations: Reservation[]): void {
    localStorage.setItem('reservations', JSON.stringify(reservations));
  }

  addReservation(reservation: Reservation): void {
    const reservations = this.getReservations();
    reservations.push(reservation);
    this.saveReservations(reservations);
  }

  updateReservation(index: number, updatedReservation: Reservation): void {
    const reservations = this.getReservations();
    reservations[index] = updatedReservation;
    this.saveReservations(reservations);
  }

  deleteReservation(index: number): void {
    const reservations = this.getReservations();
    reservations.splice(index, 1);
    this.saveReservations(reservations);
  }
}
