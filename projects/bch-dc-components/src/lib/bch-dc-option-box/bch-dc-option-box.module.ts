import { NgModule } from '@angular/core';
import { BchDcOptionBoxComponent } from './bch-dc-option-box.component';
import { CommonModule } from '@angular/common';
import { BchDcInputModule } from '../bch-dc-input/bch-dc-input.module';
import { BchDcCircleButtonModule } from '../bch-dc-circle-button/bch-dc-circle-button.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BchDcInputModule,
    BchDcCircleButtonModule,
    SharedModule
  ],
  declarations: [
    BchDcOptionBoxComponent
  ],
  exports: [
    BchDcOptionBoxComponent
  ]
})
export class BchDcOptionBoxModule {}
