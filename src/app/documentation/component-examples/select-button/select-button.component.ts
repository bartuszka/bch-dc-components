import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectedValuesFormGroup } from './models/selected-values-form-group';
import { SelectedValueModel } from './models/selected-value.model';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {
  public buttonMessages: string[] = ['C', 'U', 'S', 'PL'];
  public labelMessage: string = 'Select button label';
  public currentValues: SelectedValueModel[] = [
    { name:'name 1', data: 'value 1' },
    { name:'name 2', data: 'value 2' }
  ];
  public availableValues: SelectedValueModel[] = [
    { name:'name 1', data: 'value 1' },
    { name:'name 2', data: 'value 2' },
    { name:'name 3', data: 'value 3' },
    { name:'name 4', data: 'value 4' }
  ];
  public selectedValuesForm: FormGroup<SelectedValuesFormGroup>;
  public inputValues: SelectedValueModel[];

  public ngOnInit(): void {
    this.selectedValuesForm = new FormGroup<SelectedValuesFormGroup>({
      selectedValues: new FormControl(this.currentValues),
      selectedValuesDisabled: new FormControl(this.currentValues)
    });

    this.inputValues = this.selectedValuesForm.value.selectedValues;
  }

  public valueChanged(value: SelectedValueModel[]): void {
    this.inputValues = value;
  }

  public submit(): void {
    console.log(this.selectedValuesForm.value)
  }
}
