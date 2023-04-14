import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InputFormGroup } from './models/input-form-group.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  public inputForm: FormGroup;
  public inputValue: string;

  public ngOnInit(): void {
    this.inputForm = new FormGroup<InputFormGroup>({
      input: new FormControl('input value'),
      inputDisabled: new FormControl('Input disabled value')
    });

    this.inputValue = this.inputForm.value.input;
  }

  public valueChanged(value: string): void {
    this.inputValue = value;
  }
}
