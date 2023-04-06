import { Component } from '@angular/core';
import { DoubleColorMode } from 'projects/bch-dc-components/src/lib/bch-dc-circle-button/models/double-color-mode';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  public colorModes: typeof DoubleColorMode = DoubleColorMode;
}
