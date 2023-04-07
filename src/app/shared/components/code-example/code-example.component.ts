import { Component, Input } from '@angular/core';
import { DoubleColorMode } from 'bch-dc-components';

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.scss']
})
export class CodeExampleComponent {
  @Input() public expandButtonVisible: boolean = false;

  public colorModes: typeof DoubleColorMode = DoubleColorMode;
  public isOpened = false;
}
