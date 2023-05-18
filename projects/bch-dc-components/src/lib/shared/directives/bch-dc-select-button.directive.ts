import { AfterViewInit, Directive, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bchDcSelectButton]'
})
export class BchDcSelectButtonDirective implements AfterViewInit, OnDestroy {
  @Input() public checkedClassReceiverSelector: string = 'button';
  @Input() public clickedElementSelector: string;
  @Input() set isChecked(isChecked: boolean) {
    this._isChecked = isChecked;
    this.setCheckedElement();
  }

  private _isChecked: boolean = false;
  private radioInput: HTMLInputElement;
  private checkedClassReceiver: HTMLButtonElement;
  private clickableElement: HTMLElement;
  private clickedElementListener: (event: Event) => void;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  public ngAfterViewInit(): void {
    this.radioInput = this.elRef.nativeElement.querySelector('input');
    this.checkedClassReceiver = this.elRef.nativeElement.querySelector(this.checkedClassReceiverSelector);
    this.renderer.setProperty(this.radioInput, 'checked', this.isChecked);
    this.clickableElement = this.clickedElementSelector
      ? this.elRef.nativeElement.querySelector(this.clickedElementSelector)
      : this.elRef.nativeElement;
    this.setCheckedElement();
    this.setListener();
  }

  public ngOnDestroy(): void {
    this.removeListener();
  }

  private setCheckedElement(): void {
    if (!this.radioInput) {
      return;
    }

    this.renderer.setProperty(this.radioInput, 'checked', this._isChecked);
    this._isChecked
      ? this.renderer.addClass(this.checkedClassReceiver, 'checked')
      : this.renderer.removeClass(this.checkedClassReceiver, 'checked');
  }

  private setListener(): void {
    if (!this.clickedElementListener) {
      this.clickedElementListener = () => {
        this.radioInput.dispatchEvent(new Event('change'));
        this.setCheckedElement();
      }

      this.clickableElement.addEventListener('click', this.clickedElementListener);
    }
  }

  private removeListener(): void {
    if (this.clickedElementListener) {
      this.clickableElement.removeEventListener('click', this.clickedElementListener);
    }
  }
}
