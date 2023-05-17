import { NgModule } from '@angular/core';
import { OptionBoxComponent } from './option-box.component';
import { OptionBoxRoutingModule } from './option-box-routing.module';
import {
  BchDcOptionBoxModule
} from '../../../../../projects/bch-dc-components/src/lib/bch-dc-option-box/bch-dc-option-box.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    OptionBoxRoutingModule,
    BchDcOptionBoxModule,
    SharedModule
  ],
  declarations: [
    OptionBoxComponent
  ]
})
export class OptionBoxModule {}
