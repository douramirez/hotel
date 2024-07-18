import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ServicesComponent } from './services/services.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SavedReservationsComponent } from './saved-reservations/saved-reservations.component';
import { EditReservationDialogComponent } from './edit-reservation-dialog/edit-reservation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HotelsComponent,
    ServicesComponent,
    ReservationsComponent,
    OffersComponent,
    ContactComponent,
    NavbarComponent,
    ConfirmationDialogComponent,
    SavedReservationsComponent,
    EditReservationDialogComponent
  ],
  imports: [
   BrowserModule,
   AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatIconModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
