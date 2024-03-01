import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Import RouterModule
  templateUrl: './app.component.html',
  //template:'',
  styleUrls: ['./app.component.css'] // Optional: Add your stylesheet
})
export class AppComponent {
  title = 'admin-dashboard';
}
