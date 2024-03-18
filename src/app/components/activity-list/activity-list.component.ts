import {Component} from '@angular/core';
import {Activity} from '../../models/activity.model';
import {Store} from '@ngrx/store';
import {Observable, combineLatest, map, switchMap, tap, withLatestFrom} from 'rxjs';
import {AsyncPipe, DatePipe} from '@angular/common';
import {AppState} from '../../state';
import {ActivitiesActions} from '../../state/activities.state';
import {ActivityTypeDirective} from '../../directives/activity-type.directive';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [AsyncPipe, DatePipe, ActivityTypeDirective],
  templateUrl: './activity-list.component.html',
  styleUrl: './activity-list.component.scss',
})
export class ActivityListComponent {
  activities$: Observable<Activity[]>;

  constructor(private store: Store<AppState>) {
    this.activities$ = combineLatest({
      activities: store.select('activities'),
      activityType: store.select('activityType'),
    }).pipe(
      map(({activities, activityType}) => {
        if (activityType === 'All') {
          return activities;
        }
        return activities.filter((a) => a.ActivityType === activityType);
      }),
    );
  }

  deleteActivity(id: number): void {
    this.store.dispatch(ActivitiesActions.removeActivity({ActivityId: id}));
  }
}
