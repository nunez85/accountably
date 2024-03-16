import {Component} from '@angular/core';
import {ActivityComponent} from './components/activity/activity.component';
import {ActivityListComponent} from './components/activity-list/activity-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ActivityComponent, ActivityListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
