import { FormControl } from '@angular/forms';

export interface TriangleValue {
  name: string,
  value: number
}

export interface WordTypeForm {
  wordType: FormControl<TriangleValue>;
}
