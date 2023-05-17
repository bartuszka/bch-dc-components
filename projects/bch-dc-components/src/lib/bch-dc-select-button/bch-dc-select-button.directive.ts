import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bchDcSelectButton]'
})
export class BchDcSelectButtonDirective implements AfterViewInit {
  @Input() set isChecked(isChecked: boolean) {
    this._isChecked = isChecked;
    this.setCheckedElement();
  }

  private _isChecked: boolean = false;
  private radioInput: HTMLInputElement;
  private radioButton: HTMLButtonElement;

  @HostListener('click', ['$event.target']) onClick() {
    this.radioInput.dispatchEvent(new Event('change'));
    this.setCheckedElement();
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    this.radioInput = this.elRef.nativeElement.querySelector('input');
    this.radioButton = this.elRef.nativeElement.querySelector('button');
    this.renderer.setProperty(this.radioInput, 'checked', this.isChecked);
    this.setCheckedElement();
  }

  private setCheckedElement(): void {
    if (!this.radioInput) {
      return;
    }

    this.renderer.setProperty(this.radioInput, 'checked', this._isChecked);
    this._isChecked
      ? this.renderer.addClass(this.radioButton, 'checked')
      : this.renderer.removeClass(this.radioButton, 'checked');
  }
}
