import { AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { SideMenuDisplayModeModel } from './models/side-menu-display-mode.model';

@Directive({
  selector: '[appSideMenu]'
})
export class BchDcSideMenuDirective implements AfterViewInit {
  @Input() public headerHeight: number;
  @Input() public sideMenuWidth: number;
  @Input() public modeOverlap: SideMenuDisplayModeModel;

  private readonly parentComponent: HTMLElement;
  private isMobile: boolean;
  private _isVisible: boolean;
  private windowHeight: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.parentComponent = this.elementRef.nativeElement.parentElement;
  }

  @HostListener('window:resize', ['$event']) onResize(event: Event) {
    this.setDimensions((event.target as Window).innerWidth);
  }

  @Input() public set isVisible(isVisible: boolean) {
    this._isVisible = isVisible;
    this.setHiddenClass(this._isVisible);
    this.setLeftPosition(isVisible);
    !isVisible ? setTimeout(this.setTransitions.bind(this, isVisible), 300) : this.setTransitions(isVisible);
    this.setSiblingElementLeftPosition();
  }

  public ngAfterViewInit(): void {
    this.setDimensions(window.innerWidth);
    this.windowHeight = window.innerHeight;
    this.setSiblingElementTransitions();
    setTimeout(() => this.setHeight());
  }

  private setDimensions(windowWidth: number) {
    const isMobile = !(windowWidth > 768);

    if (this.isMobile !== isMobile) {
      this.isMobile = isMobile;
      this.setWidth();
      this.setLeftPosition(this._isVisible);
      this.setSiblingElementLeftPosition();
    }

    if (window.innerHeight !== this.windowHeight) {
      this.windowHeight = window.innerHeight;
      this.setHeight();
    }
  }

  private setLeftPosition(isVisible: boolean): void {
    if (this.sideMenuWidth) {
      this.renderer.setStyle(this.parentComponent, 'margin-left',
        !isVisible && !this.isMobile ? -this.sideMenuWidth + 'px' : 0);
    }
  }

  private setHiddenClass(isVisible: boolean): void {
    isVisible
      ? this.renderer.removeClass(this.parentComponent, 'hidden')
      : this.renderer.addClass(this.parentComponent, 'hidden');
  }

  private setHeight(): void {
    this.renderer.setStyle(this.parentComponent, 'height', window.innerHeight - this.headerHeight + 'px');
  }

  private setWidth(): void {
    this.renderer.setStyle(this.parentComponent, 'width', !this.isMobile ? this.sideMenuWidth + 'px' : '100%');
  }

  private setSiblingElementLeftPosition(): void {
    if (this.parentComponent.nextElementSibling && this.modeOverlap === SideMenuDisplayModeModel.ADJACENT) {
      this.renderer.setStyle(this.parentComponent.nextElementSibling, 'margin-left',
        this._isVisible && !this.isMobile ? this.sideMenuWidth + 'px' : '0');
    }
  }

  private setTransitions(isVisible: boolean): void {
    this.renderer.setStyle(this.parentComponent, 'transition', !isVisible ? 'none ease-out .2s' : 'all ease-out .2s');
  }

  private setSiblingElementTransitions(): void {
    if (this.parentComponent.nextElementSibling) {
      this.renderer.setStyle(this.parentComponent.nextElementSibling, 'transition', 'all .2s ease-out');
    }
  }
}
