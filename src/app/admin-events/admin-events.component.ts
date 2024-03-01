import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Event } from '../models/event.model';
import { EventStorageService } from '../event-storage.service';


@Component({
  standalone:  true,
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css'],
  imports: [FormsModule] // Add FormsModule to imports

})
export class AdminEventsComponent implements OnInit {

  events: Event[] = [];
  newEvent: Event = {} as Event;

  constructor(private eventStorageService: EventStorageService, private router: Router) { }

  ngOnInit(): void {
    this.events = this.eventStorageService.getEvents();
  }

  addEvent(): void {
    this.eventStorageService.addEvent(this.newEvent);
    this.newEvent = {} as Event; // Clear new event form
    this.events = this.eventStorageService.getEvents();
  }

  updateEvent(event: Event): void {
    this.eventStorageService.updateEvent(event.id, event);
    this.events = this.eventStorageService.getEvents();
  }

  deleteEvent(eventId: number): void {
    this.eventStorageService.deleteEvent(eventId);
    this.events = this.eventStorageService.getEvents();
  }

  logout(): void {
    // Call your API endpoint for logout (if applicable)
    // Clear user data in local storage or service (if applicable)

    // Redirect to the index page
    this.router.navigate(['/']);  // Replace '/' with your actual index route path
  }
}
