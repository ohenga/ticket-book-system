import { Route, RouterModule } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventsComponent } from './events/events.component';

export const routes: Route[] = [
  { path: '', component: EventsComponent }, // Assuming EventsComponent exists
  { path: 'events/:id', component: EventDetailsComponent }
];

export const appRoutes = RouterModule.forRoot(routes); // Export routes for main.ts
