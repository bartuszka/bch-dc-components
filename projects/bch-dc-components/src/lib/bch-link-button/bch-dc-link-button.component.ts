import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'bch-dc-link-button',
  templateUrl: './bch-dc-link-button.component.html',
  styleUrls: ['./bch-dc-link-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BchDcLinkButtonComponent {
  @Input() public linkUrl: string;
}
