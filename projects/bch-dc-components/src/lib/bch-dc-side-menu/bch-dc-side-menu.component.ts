import { Component, HostBinding, Input } from '@angular/core';
import { SideMenuDisplayModeModel } from './models/side-menu-display-mode.model';
import { DoubleColorMode } from '../bch-dc-circle-button/models/double-color-mode';

@Component({
  selector: 'bch-dc-side-menu',
  templateUrl: './bch-dc-side-menu.component.html',
  styleUrls: ['./bch-dc-side-menu.component.scss'],
})
export class BchDcSideMenuComponent {
  @Input() public headerHeight: number;
  @Input() public sideMenuWidth: number = 270;
  @Input() public isVisible: boolean;
  @Input() public modeOverlap: SideMenuDisplayModeModel;

  public circleButtonColorMode: typeof DoubleColorMode = DoubleColorMode;
  
  public toggleMenu() {
    this.isVisible = !this.isVisible;
  }
}
