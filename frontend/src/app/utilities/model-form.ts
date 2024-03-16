import {FormControl, FormGroup} from '@angular/forms';

export function asFormGroup(T: any): FormGroup {
  let formGroup: any = {};
  for (const propertyName in T) {
    formGroup[propertyName] = new FormControl(T[propertyName]);
  }

  console.log(formGroup);
  return new FormGroup(formGroup);
}
