import { FormControl } from '@angular/forms';
import { SelectedValueModel } from './selected-value.model';

export interface SelectedValuesFormGroup {
  selectedValues: FormControl<SelectedValueModel[]>
  selectedValuesDisabled: FormControl<SelectedValueModel[]>
}
