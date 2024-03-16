import {Component} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Activity} from '../../models/activity.model';
import {asFormGroup} from '../../utilities/model-form';
import {Store} from '@ngrx/store';
import {AppState} from '../../state';
import {ActivitiesActions} from '../../state/activities.actions';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  formGroup: FormGroup;

  constructor(private store: Store<AppState>) {
    this.formGroup = asFormGroup(new Activity());
  }

  addActivity(): void {
    console.log(this.formGroup.value);
    this.store.dispatch(ActivitiesActions.addActivity(this.formGroup.value));
  }
}
