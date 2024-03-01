import { Component, Input, OnInit } from '@angular/core';
import { Event } from '../models/event.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
  imports:[CommonModule],
  standalone: true // Standalone component with routing
})
export class EventDetailsComponent implements OnInit {

  @Input() event: Event | null = null;

  constructor() { }

  ngOnInit(): void { }
}

