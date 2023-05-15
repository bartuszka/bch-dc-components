import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bchDcSelectButtons]'
})
export class BchDcSelectButtonsDirective implements AfterViewInit {
  private checkboxInput: HTMLInputElement;
  private button: HTMLButtonElement;
  @Input() isChecked = false;

  @HostListener('click', ['$event.target']) onClick(button: HTMLButtonElement) {
    this.isChecked = !this.isChecked;
    this.setCheckedElements(button);
    this.checkboxInput.dispatchEvent(new Event('change'));
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    this.checkboxInput = this.elRef.nativeElement.querySelector('input');
    this.button = this.elRef.nativeElement.querySelector('button');
    this.setCheckedElements(this.button);
  }

  private setCheckedElements(button: HTMLButtonElement): void {
    this.renderer.setProperty(this.checkboxInput, 'checked', this.isChecked);
    this.isChecked
      ? this.renderer.addClass(button, 'checked')
      : this.renderer.removeClass(button, 'checked');
  }
}
