import {Component} from '@angular/core';
import {Activity} from '../../models/activity.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AsyncPipe, NgFor} from '@angular/common';
import {AppState} from '../../state';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.scss',
})
export class ActivityListComponent {
  activities$: Observable<Activity[]>;

  constructor(private store: Store<AppState>) {
    this.activities$ = store.select('activities');
  }
}
