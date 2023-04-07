import { Component } from '@angular/core';
import { DoubleColorMode } from 'projects/bch-dc-components/src/lib/bch-dc-circle-button/models/double-color-mode';
import { CircleButtonSize } from 'projects/bch-dc-components/src/lib/bch-dc-circle-button/models/circle-button-size';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss']
})
export class CircleButtonComponent {
  public colorModes: typeof DoubleColorMode = DoubleColorMode;
  public circleButtonSizes: typeof CircleButtonSize = CircleButtonSize;
}
