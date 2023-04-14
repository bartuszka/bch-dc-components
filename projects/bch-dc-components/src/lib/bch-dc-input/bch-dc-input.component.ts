import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'bch-dc-input',
  templateUrl: './bch-dc-input.component.html',
  styleUrls: ['./bch-dc-input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BchDcInputComponent),
    multi: true
  }]
})
export class BchDcInputComponent implements ControlValueAccessor {
  @Input() public idForLabel: string;
  @Input() public labelMessage: string;
  @Input() public inputValue: string;
  @Input() public type: string = 'text';
  @Output() public onValueChanged: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('inputField', { static: true }) public inputField: ElementRef<HTMLInputElement>;

  public _inputDisabled: boolean = false;
  private _value: string = null;

  constructor(private renderer: Renderer2) {}

  public onChange: (value: string) => void = (): void => { /* EMPTY */ };
  public onTouched: () => void = (): void => { /* EMPTY */ };

  @Input() public set value(value: string) {
    if (value !== this._value) {
      this._value = value;
      this.onChange(this._value);
    }
  }

  public get value(): string {
    return this._value;
  }

  @Input() public set inputDisabled(isDisabled: boolean) {
    if (isDisabled !== this._inputDisabled) {
      this._inputDisabled = true;
      this.setDisabledState(this._inputDisabled);
    }
  }

  public get inputDisabled(): boolean {
    return this._inputDisabled;
  }

  /* eslint @typescript-eslint/no-explicit-any: off */
  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  /* eslint @typescript-eslint/no-explicit-any: off */
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public writeValue(value: string): void {
    this._value = value;
    this.onChange(this._value);
  }

  public setDisabledState(isDisabled: boolean) {
    if (this.inputField) {
      this.renderer.setProperty(this.inputField.nativeElement, 'disabled', isDisabled);
      this._inputDisabled = isDisabled;
    }
  }

  public changeValue(event: Event): void {
    const value: string = (event.target as HTMLInputElement).value;
    this.writeValue(value);
    this.onValueChanged.emit(value)
  }

  public touched(): void {
    this.onTouched();
  }
}
