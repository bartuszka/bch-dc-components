import { NgModule } from '@angular/core';
import { BchDcSelectButtonComponent } from './bch-dc-select-button.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    BchDcSelectButtonComponent,
  ],
  exports: [
    BchDcSelectButtonComponent
  ]
})
export class BchDcSelectButtonModule {}
