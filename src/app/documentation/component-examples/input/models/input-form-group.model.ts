import { FormControl } from '@angular/forms';

export interface InputFormGroup {
  input: FormControl<string>
  inputDisabled: FormControl<string>
}
