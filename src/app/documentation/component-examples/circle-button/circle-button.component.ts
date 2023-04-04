import { Component } from '@angular/core';
import { DoubleColorMode, CircleButtonSize } from 'bch-dc-components';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss']
})
export class CircleButtonComponent {
  public colorModes: typeof DoubleColorMode = DoubleColorMode;
  public circleButtonSizes: typeof CircleButtonSize = CircleButtonSize;
}
