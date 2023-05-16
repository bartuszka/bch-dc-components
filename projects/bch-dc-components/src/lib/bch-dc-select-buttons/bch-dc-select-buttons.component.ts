import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
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
export class BchDcSelectButtonsComponent implements ControlValueAccessor, OnInit {
  @Input() public labelMessage: string;
  @Input() public buttonMessages: string[];
  @Input() public availableValues: any[];                                                                               // eslint-disable-line @typescript-eslint/no-explicit-any
  @Input() public inputDisabled: boolean = false;

  @Output() public onValueChanged: EventEmitter<any[]> = new EventEmitter<any[]>();                                     // eslint-disable-line @typescript-eslint/no-explicit-any

  public valuesData: ValueData[];
  public onChange: (value: any[]) => void = (): void => { /* EMPTY */ };                                                // eslint-disable-line @typescript-eslint/no-explicit-any
  public onTouched: () => void = (): void => { /* EMPTY */ };                                                           // eslint-disable-line @typescript-eslint/no-explicit-any

  private _value: any[] = null;                                                                                         // eslint-disable-line @typescript-eslint/no-explicit-any

  @Input() public set value(value: any[]) {                                                                             // eslint-disable-line @typescript-eslint/no-explicit-any
    if (value === this._value) {
      return;
    }

    this._value = value;
    this.setValuesData();
    this.onChange(this._value);
  }

  public get value(): any[] {                                                                                           // eslint-disable-line @typescript-eslint/no-explicit-any
    return this._value;
  }

  public ngOnInit(): void {
    this.setValuesData();
  }

  public changeValue(event: Event, valueData: ValueData): void {
    valueData.isChecked = (event.target as HTMLInputElement).checked;
    this.writeValue(this.getValuesFromValuesData())
    this.onValueChanged.emit(this._value);
  }

  public registerOnChange(fn: any): void {                                                                              // eslint-disable-line @typescript-eslint/no-explicit-any
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {                                                                             // eslint-disable-line @typescript-eslint/no-explicit-any
    this.onTouched = fn;
  }

  public writeValue(value: any[]): void {                                                                               // eslint-disable-line @typescript-eslint/no-explicit-any
    this.value = value;
    this.onChange(this._value);
  }

  private setValuesData(): void {
    if (this._value && !this.valuesData && this.availableValues) {
      const currentValueStrings: string[] = this._value.map((currentValue: any) => JSON.stringify(currentValue));       // eslint-disable-line @typescript-eslint/no-explicit-any

      this.valuesData = this.availableValues.map((currentValue: any) => ({                                              // eslint-disable-line @typescript-eslint/no-explicit-any
        isChecked: currentValueStrings.includes(JSON.stringify(currentValue)),
        value: cloneDeep(currentValue)
      }));
    }
  }

  private getValuesFromValuesData(): any[] {                                                                            // eslint-disable-line @typescript-eslint/no-explicit-any
    return this.valuesData
      .filter((currentValueData: ValueData) => currentValueData.isChecked)
      .map((currentValueData: ValueData) => currentValueData.value)
  }
}
