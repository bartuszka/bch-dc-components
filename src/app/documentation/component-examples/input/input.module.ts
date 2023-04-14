import { NgModule } from '@angular/core';
import { InputComponent } from './input.component';
import { InputRoutingModule } from './input.routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { BchDcInputModule } from 'projects/bch-dc-components/src/lib/bch-dc-input/bch-dc-input.module';


@NgModule({
  imports: [
    InputRoutingModule,
    SharedModule,
    BchDcInputModule,
  ],
  declarations: [
    InputComponent
  ]
})
export class InputModule {}
