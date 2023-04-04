import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'bch-dc-input',
  templateUrl: './bch-dc-input.html',
  styleUrls: ['./bch-dc-input.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BchDcInputComponent {
  @Input() public idForLabel: string;
  @Input() public labelMessage: string;
  @Input() public inputValue: string;
}
