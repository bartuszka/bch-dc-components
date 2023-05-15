import { NgModule } from '@angular/core';
import { SelectButtonComponent } from './select-button.component';
import { SelectButtonRoutingModule } from './select-button-routing.module';
import {
  BchDcSelectButtonsModule
} from '../../../../../projects/bch-dc-components/src/lib/bch-dc-select-buttons/bch-dc-select-buttons.module';
import { SharedModule } from '../../../shared/shared.module';
import { BchDcInputModule } from '../../../../../projects/bch-dc-components/src/lib/bch-dc-input/bch-dc-input.module';

@NgModule({
  imports: [
    SelectButtonRoutingModule,
    BchDcSelectButtonsModule,
    SharedModule,
    BchDcInputModule,
  ],
  declarations: [
    SelectButtonComponent,
  ]
})
export class SelectButtonModule {}
