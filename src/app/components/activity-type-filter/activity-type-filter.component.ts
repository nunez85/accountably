import {Component} from '@angular/core';
import {ActivityTypes} from '../../utilities/activity-types';
import {ActivityTypeDirective} from '../../directives/activity-type.directive';
import {Store} from '@ngrx/store';
import {AppState} from '../../state';
import {ActivitiesActions} from '../../state/activities.state';
import {ActivityTypeActions} from '../../state/activity-type.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-activity-type-filter',
  standalone: true,
  imports: [ActivityTypeDirective],
  templateUrl: './activity-type-filter.component.html',
  styleUrl: './activity-type-filter.component.scss',
})
export class ActivityTypeFilterComponent {
  activityTypes: string[];

  constructor(private store: Store<AppState>) {
    this.activityTypes = ActivityTypes.all;
  }

  filter(activityType: string): void {
    this.store.dispatch(ActivityTypeActions.selectActivityType({activityType}));
  }
}
