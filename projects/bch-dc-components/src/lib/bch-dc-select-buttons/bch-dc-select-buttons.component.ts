import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueData } from './models/value-data';
import { cloneDeep } from '../functions/clone-deep';

@Component({
  selector: 'bch-dc-select-buttons',
  templateUrl: './bch-dc-select-buttons.component.html',
  styleUrls: ['./bch-dc-select-buttons.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BchDcSelectButtonsComponent),
    multi: true
  }]
})
export class BchDcSelectButtonsComponent implements ControlValueAccessor {
  @Input() public labelMessage: string;
  @Input() public buttonMessages: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() public availableValues: any[];
  @Input() public inputDisabled: boolean = false;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() public onValueChanged: EventEmitter<any[]> = new EventEmitter<any[]>();

  public valuesData: ValueData[];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public onChange: (value: any[]) => void = (): void => { /* EMPTY */ };
  public onTouched: () => void = (): void => { /* EMPTY */ };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _value: any[] = null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() public set value(value: any[]) {
    if (value === this._value) {
      return;
    }

    this._value = value;

    if (!this.valuesData) {
      this.setValuesData();
    }

    this.onChange(this._value);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public get value(): any[] {
    return this._value;
  }

  public changeValue(event: Event, valueData: ValueData): void {
    valueData.isChecked = (event.target as HTMLInputElement).checked;
    this.writeValue(this.getValuesFromValuesData())
    this.onValueChanged.emit(this._value);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public writeValue(value: any[]): void {
    this.value = value;
    this.onChange(this._value);
  }

  private setValuesData(): void {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const currentValueStrings: string[] = this.value.map((currentValue: any) => JSON.stringify(currentValue));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.valuesData = this.availableValues.map((currentValue: any) => {
      const availableValueString: string = JSON.stringify(currentValue);

      return {
        isChecked: currentValueStrings.includes(availableValueString),
        value: cloneDeep(currentValue)
      }
    })

    this.value = this.value || Array.from(this.availableValues).map(() => null);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private getValuesFromValuesData(): any[] {
    return this.valuesData
      .filter((currentValueData: ValueData) => currentValueData.isChecked)
      .map((currentValueData: ValueData) => currentValueData.value)
  }
}
