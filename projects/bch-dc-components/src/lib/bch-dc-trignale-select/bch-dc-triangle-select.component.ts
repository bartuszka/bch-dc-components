import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ValueData } from '../bch-dc-select-buttons/models/value-data';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { cloneDeep } from '../functions/clone-deep';

@Component({
  selector: 'bch-dc-triangle-select',
  templateUrl: './bch-dc-triangle-select.component.html',
  styleUrls: ['./bch-dc-triangle-select.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BchDcTriangleSelectComponent),
    multi: true
  }]
})
export class BchDcTriangleSelectComponent implements ControlValueAccessor, OnInit {
  @Input() public name: string;
  @Input() public availableValues: any[];                                                                               // eslint-disable-line @typescript-eslint/no-explicit-any
  @Input() public buttonMessages: string[];

  @Output() public onValueChanged: EventEmitter<any> = new EventEmitter<any>();                                         // eslint-disable-line @typescript-eslint/no-explicit-any

  public valuesData: ValueData[];
  public onChange: (value: any[]) => void = (): void => { /* EMPTY */ };                                                // eslint-disable-line @typescript-eslint/no-explicit-any
  public onTouched: () => void = (): void => { /* EMPTY */ };

  private _value: any;                                                                                                  // eslint-disable-line @typescript-eslint/no-explicit-any

  @Input() public set value(value: any) {                                                                               // eslint-disable-line @typescript-eslint/no-explicit-any
    if (value === this._value) {
      return;
    }

    this._value = value;
    this.setValuesData();
    this.onChange(this._value);
  }

  public get value(): any {                                                                                             // eslint-disable-line @typescript-eslint/no-explicit-any
    return this._value;
  }

  public ngOnInit(): void {
    this.setValuesData();
  }

  public registerOnChange(fn: any): void {                                                                              // eslint-disable-line @typescript-eslint/no-explicit-any
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {                                                                             // eslint-disable-line @typescript-eslint/no-explicit-any
    this.onTouched = fn;
  }

  public writeValue(value: any): void {                                                                                 // eslint-disable-line @typescript-eslint/no-explicit-any
    this.value = value;
    this.onChange(this._value);
  }

  public changeValue(event: Event, valueData: ValueData, index: number): void {
    this.writeValue(valueData.value);
    this.valuesData.forEach((valueData: ValueData, valueDataIndex: number) => valueData.isChecked = valueDataIndex === index);
    this.onValueChanged.emit(this._value);
  }

  private setValuesData(): void {
    if (this.availableValues && !this.valuesData && this._value) {
      this.valuesData = this.availableValues.map((availableValue: any[]) => ({                                          // eslint-disable-line @typescript-eslint/no-explicit-any
        isChecked: JSON.stringify(availableValue) === JSON.stringify(this._value),
        value: cloneDeep(availableValue)
      }));
    }
  }
}
