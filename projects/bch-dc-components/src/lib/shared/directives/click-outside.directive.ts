import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[bchDcClickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickedOutside: EventEmitter<void> = new EventEmitter<void>();

  @HostListener('window:mousedown', ['$event.target']) onWindowClick(target: HTMLElement) {
    if (!this.elRef.nativeElement.contains(target)) {
      this.clickedOutside.emit();
    }
  }

  constructor(private elRef: ElementRef) {}
}
