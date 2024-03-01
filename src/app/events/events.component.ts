import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import { EventStorageService } from '../event-storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [];

  constructor(private eventStorageService: EventStorageService) { }

  ngOnInit(): void {
    this.events = this.eventStorageService.getEvents();
  }
}
