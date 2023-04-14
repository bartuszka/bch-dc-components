import { NgModule } from '@angular/core';
import { CodeExampleComponent } from './components/code-example/code-example.component';
import { CommonModule } from '@angular/common';
import { BchDcCircleButtonModule } from 'bch-dc-components';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BchDcCircleButtonModule
  ],
  declarations: [
    CodeExampleComponent,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    CodeExampleComponent,
  ]
})
export class SharedModule {}
