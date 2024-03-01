import { Injectable } from '@angular/core';
import { Event } from './models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventStorageService {

  private readonly storageKey = 'events';

  constructor() { }

  public getEvents(): Event[] {
    const eventsString = localStorage.getItem(this.storageKey);
    if (eventsString) {
      return JSON.parse(eventsString) as Event[];
    }
    return [];
  }

  public saveEvents(events: Event[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(events));
  }

  public addEvent(event: Event): void {
    const events = this.getEvents();
    events.push(event);
    this.saveEvents(events);
  }

  public updateEvent(eventId: number, updatedEvent: Event): void {
    const events = this.getEvents();
    const eventIndex = events.findIndex(event => event.id === eventId);
    if (eventIndex !== -1) {
      events[eventIndex] = updatedEvent;
      this.saveEvents(events);
    }
  }

  public deleteEvent(eventId: number): void {
    const events = this.getEvents();
    const eventIndex = events.findIndex(event => event.id === eventId);
    if (eventIndex !== -1) {
      events.splice(eventIndex, 1);
      this.saveEvents(events);
    }
  }
}

