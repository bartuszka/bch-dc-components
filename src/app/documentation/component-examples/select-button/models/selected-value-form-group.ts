import { FormControl } from '@angular/forms';
import { SelectedValueModel } from './selected-value.model';

export interface SelectedValueFormGroup {
  selectedValue: FormControl<SelectedValueModel>
  selectedValueDisabled: FormControl<SelectedValueModel>
}
