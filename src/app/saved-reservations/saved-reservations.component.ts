import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditReservationDialogComponent } from '../edit-reservation-dialog/edit-reservation-dialog.component';
import { Reservation } from '../reservation.model';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-saved-reservations',
  templateUrl: './saved-reservations.component.html',
  styleUrls: ['./saved-reservations.component.css']
})
export class SavedReservationsComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(public dialog: MatDialog, private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.reservations = this.reservationService.getReservations();
  }

  deleteReservation(index: number): void {
    this.reservationService.deleteReservation(index);
    this.getReservations(); // Refresh the reservations list
  }

  openEditDialog(index: number): void {
    const dialogRef = this.dialog.open(EditReservationDialogComponent, {
      width: '250px',
      data: { reservation: { ...this.reservations[index] } }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.reservationService.updateReservation(index, result);
        this.getReservations(); // Refresh the reservations list
      }
    });
  }
}
