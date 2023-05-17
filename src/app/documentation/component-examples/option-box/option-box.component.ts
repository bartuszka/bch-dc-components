import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BadgesForm } from './models/badges-form.model';

@Component({
  selector: 'app-option-box',
  templateUrl: './option-box.component.html',
  styleUrls: ['./option-box.component.scss']
})
export class OptionBoxComponent {
  public badges: string[] = ['Badge one', 'Badge two', 'Badge three', 'Badge four', 'Badge five'];

  public badgesForm: FormGroup<BadgesForm> = new FormGroup<BadgesForm>({
    badges: new FormControl(this.badges),
    badgesDisabled: new FormControl(this.badges)
  });
}
