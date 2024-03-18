import {Component} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Activity} from '../../models/activity.model';
import {createFormGroup} from '../../utilities/form-funcs';
import {Store} from '@ngrx/store';
import {AppState} from '../../state';
import {ActivitiesActions} from '../../state/activities.state';
import {SnackbarService} from '../../services/snackbar.service';
import {ActivityTypes} from '../../utilities/activity-types';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  formGroup: FormGroup;
  count = 4;
  activityTypes: string[];

  constructor(
    private store: Store<AppState>,
    private snackbarService: SnackbarService,
  ) {
    this.activityTypes = ActivityTypes.all;
    this.formGroup = createFormGroup(
      ['Description', 'ActivityType', 'DateStamp'],
      Validators.required,
    );
  }

  addActivity(): void {
    if (this.formGroup.valid) {
      const activity: Activity = this.formGroup.value;
      activity.ActivityId = ++this.count;

      this.formGroup.reset();
      this.store.dispatch(ActivitiesActions.addActivity(activity));
    } else {
      console.log(this.formGroup);
      this.snackbarService.error('Error', 'Please fill out all values');
    }
  }
}
