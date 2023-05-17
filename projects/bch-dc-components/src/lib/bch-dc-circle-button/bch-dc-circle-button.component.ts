import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DoubleColorData, DoubleColorMode, doubleColorModes } from './models/double-color-mode';
import { CircleButtonSize } from './models/circle-button-size';

@Component({
  selector: 'bch-dc-circle-button',
  templateUrl: './bch-dc-circle-button.component.html',
  styleUrls: ['./bch-dc-circle-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BchDcCircleButtonComponent implements OnInit {
  @Input() public iconName = 'play_arrow';
  @Input() public colorMode: DoubleColorMode = DoubleColorMode.PRIMARY_LIGHT;
  @Input() public isDisabled: boolean = false;
  @Input() public size: CircleButtonSize = CircleButtonSize.SMALL;
  @Input() public type: string = 'button';

  public colorSet: DoubleColorData;
  public colorSetDisabled: DoubleColorData;
  public circleButtonSizes: typeof CircleButtonSize = CircleButtonSize;

  public ngOnInit(): void {
    this.colorSet = doubleColorModes.get(this.colorMode);
    this.colorSetDisabled = doubleColorModes.get(DoubleColorMode.DISABLED);
  }
}
