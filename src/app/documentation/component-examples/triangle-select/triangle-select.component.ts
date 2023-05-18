import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TriangleValue, WordTypeForm } from './models/word-type-form.model';

@Component({
  selector: 'app-triangle-select',
  templateUrl: './triangle-select.component.html',
  styleUrls: ['./triangle-select.component.scss']
})
export class TriangleSelectComponent implements OnInit {
  public wordTypeForm: FormGroup<WordTypeForm>;
  public availableValues: TriangleValue[] = [
    {
      name: 'VERB',
      value: 1
    },
    {
      name: 'NOUN',
      value: 2
    },
    {
      name: 'OTHER',
      value: 3
    }
  ];
  public buttonMessages: string[] = ['Verb', 'Noun', 'Other'];
  public selectedValue: TriangleValue = this.availableValues[2];

  private formInitialValue: TriangleValue = {
    name: 'NOUN',
    value: 2
  };

  public valueChanged(value: TriangleValue): void {
    this.selectedValue = value;
  }

  public ngOnInit(): void {
    this.wordTypeForm = new FormGroup<WordTypeForm>({
      wordType: new FormControl(this.formInitialValue)
    });
  }
}
