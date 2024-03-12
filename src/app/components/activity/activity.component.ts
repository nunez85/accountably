import {Component} from '@angular/core';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Activity} from '../../models/activity.model';
import {asFormGroup} from '../../utilities/model-form';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  formGroup: FormGroup;

  constructor() {
    this.formGroup = asFormGroup(new Activity());
  }
}
