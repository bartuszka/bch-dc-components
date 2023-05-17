import { FormControl } from '@angular/forms';

export interface BadgesForm {
  badges: FormControl<string[]>;
  badgesDisabled: FormControl<string[]>;
}
