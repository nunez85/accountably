import {FormControl, FormGroup, Validator, Validators} from '@angular/forms';

export function createFormGroup(names: string[], validator = Validators.nullValidator): FormGroup {
  let formGroup: any = {};
  for (const name of names) {
    formGroup[name] = new FormControl(null, validator);
  }

  return new FormGroup(formGroup);
}
