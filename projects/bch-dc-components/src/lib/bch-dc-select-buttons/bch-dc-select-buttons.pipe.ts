import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bchDcSelectButtonsCheckboxSelected'
})
export class BchDcSelectButtonsPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any, allValues: any[]): boolean {
    return allValues.indexOf(value) !== -1;
  }
}
