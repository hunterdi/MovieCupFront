import { ValidatorFn, FormArray } from '@angular/forms';

export class SystemValidator {
  public static TotalSelectedCheckboxes(total = 8): ValidatorFn {
    const validator: ValidatorFn = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        .map(control => control.value)
        .reduce((prev, next) => (next ? prev + next : prev), 0);

      return totalSelected !== total ? { required: true } : null;
    };

    return validator;
  }
}
