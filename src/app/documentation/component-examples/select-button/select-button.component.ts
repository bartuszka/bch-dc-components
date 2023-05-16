import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SelectedValuesFormGroup } from './models/selected-values-form-group';
import { SelectedValueModel } from './models/selected-value.model';
import { SelectedValueFormGroup } from './models/selected-value-form-group';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent implements OnInit {
  public selectedValuesForm: FormGroup<SelectedValuesFormGroup>;
  public inputValues: SelectedValueModel[];
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


  public currentValue: SelectedValueModel = { name:'name 2', data: 'value 2' };
  public selectedValueForm: FormGroup<SelectedValueFormGroup>;
  public singularInputValue: SelectedValueModel;
  public singularButtonMessages: string[] = ['C', 'U', 'S', 'PL'];
  public singularLabelMessage: string = 'Select singular button label';
  public singleInputValues: SelectedValueModel[] = [ ...this.availableValues ];

  public ngOnInit(): void {
    this.selectedValuesForm = new FormGroup<SelectedValuesFormGroup>({
      selectedValues: new FormControl(this.currentValues),
      selectedValuesDisabled: new FormControl(this.currentValues)
    });

    this.inputValues = this.selectedValuesForm.value.selectedValues;

    this.selectedValueForm = new FormGroup<SelectedValueFormGroup>({
      selectedValue: new FormControl(this.currentValue),
      selectedValueDisabled: new FormControl(this.currentValue)
    });

    this.singularInputValue = this.selectedValueForm.value.selectedValue;
  }

  public valueChanged(value: SelectedValueModel[]): void {
    this.inputValues = value;
  }

  public singleValueChanged(value: SelectedValueModel): void {
    this.singularInputValue = value;
  }

  public submit(): void {
    console.log(this.selectedValuesForm.value)
  }
}
