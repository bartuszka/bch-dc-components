import { Component, Input, OnInit } from '@angular/core';
import { DoubleColorData, DoubleColorMode, doubleColorModes } from '../bch-dc-circle-button/models/double-color-mode';

@Component({
  selector: 'bch-dc-button',
  templateUrl: './bch-dc-button.component.html',
  styleUrls: ['./bch-dc-button.component.scss']
})
export class BchDcButtonComponent implements OnInit {
  @Input() public iconName: string;
  @Input() public message: string = 'Button';
  @Input() public colorMode: DoubleColorMode = DoubleColorMode.PRIMARY_LIGHT;
  @Input() public isDisabled: boolean = false;
  @Input() public iconOnRight: boolean = false;
  @Input() public type: string = 'button';

  public colorSet: DoubleColorData;
  public colorSetDisabled: DoubleColorData;

  public ngOnInit(): void {
    this.colorSet = doubleColorModes.get(this.colorMode);
    this.colorSetDisabled = doubleColorModes.get(DoubleColorMode.DISABLED);
  }
}
