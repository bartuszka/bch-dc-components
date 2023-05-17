import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { cloneDeep } from '../functions/clone-deep';
import { BchDcInputComponent } from '../bch-dc-input/bch-dc-input.component';

@Component({
  selector: 'bch-dc-option-box',
  templateUrl: './bch-dc-option-box.component.html',
  styleUrls: ['./bch-dc-option-box.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BchDcOptionBoxComponent),
    multi: true
  }]
})
export class BchDcOptionBoxComponent implements ControlValueAccessor {
  @Input() public labelMessage: string = 'Label';
  @Input() public namedBy: string = 'name';
  @Input() public isDisabled: boolean = false;
  @Output() public badgeSelected: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild(BchDcInputComponent) private badgeInput: BchDcInputComponent;

  public addSectionVisible: boolean = false;
  public onChange: (value: string[]) => void = (): void => { /* EMPTY */ };
  public onTouched: () => void = (): void => { /* EMPTY */ };

  private _value: string[] = [];

  @Input() public set value(value: string[]) {
    if (cloneDeep(value) === cloneDeep(this._value)) {
      return;
    }

    this._value = value;
    this.onChange(this._value);
  }

  public get value(): string[] {
    return this._value;
  }

  public addBadge(): void {
    if (this.badgeInput.value && !this.isBadgeAdded(this.badgeInput.value)) {
      const newValue: string[] = [...this._value];
      newValue.push(this.badgeInput.value);
      this.badgeInput.value = '';
      this.writeValue(newValue);
    }
  }

  public selectBadge(badge: string): void {
    this.badgeSelected.emit(badge);
  }

  public removeBadge(index: number): void {
    const newValue: string[] = [...this._value];
    newValue.splice(index, 1);
    this.writeValue(newValue);
  }

  public registerOnChange(fn: any): void {                                                                              // eslint-disable-line @typescript-eslint/no-explicit-any
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {                                                                             // eslint-disable-line @typescript-eslint/no-explicit-any
    this.onTouched = fn;
  }

  public writeValue(value: string[]): void {
    this.value = value;
    this.onChange(this._value);
  }

  private isBadgeAdded(badge: string): boolean {
    return this._value.map((existingBadge: string) =>
      existingBadge.toLowerCase().trim()).includes(badge.toLowerCase().trim());
  }
}
