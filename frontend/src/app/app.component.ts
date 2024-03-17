import {Component} from '@angular/core';
import {ActivityComponent} from './components/activity/activity.component';
import {ActivityListComponent} from './components/activity-list/activity-list.component';
import {SnackbarComponent} from './components/snackbar/snackbar.component';
import {ActivityTypeFilterComponent} from './components/activity-type-filter/activity-type-filter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ActivityComponent,
    ActivityListComponent,
    ActivityTypeFilterComponent,
    SnackbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
