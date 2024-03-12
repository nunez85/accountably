import {Component} from '@angular/core';
import {ActivityComponent} from './components/activity/activity.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ActivityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
