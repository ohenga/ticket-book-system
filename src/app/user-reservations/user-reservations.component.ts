import { Component, OnInit } from '@angular/core';
import { Reservation } from '../models/reservation.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-reservations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-reservations.component.html',
  styleUrls: ['./user-reservations.component.css']
})
export class UserReservationsComponent implements OnInit {

  reservations: Reservation[] = [];

  constructor() { }

  ngOnInit(): void {
    // Retrieve user reservations from local storage
    this.reservations = this.getReservationsFromLocalStorage();
  }

  getReservationsFromLocalStorage(): Reservation[] {
    // Implement logic to retrieve reservations from local storage
    // Example (replace with your actual implementation):
    const storedReservations = localStorage.getItem('userReservations');
    if (storedReservations) {
      try {
        return JSON.parse(storedReservations) as Reservation[];
      } catch (error) {
        console.error('Error parsing reservations:', error);
        return [];
      }
    }
    return [];
  }
}
