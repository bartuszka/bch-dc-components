import { NgModule } from '@angular/core';
import { SelectButtonComponent } from './select-button.component';
import { SelectButtonRoutingModule } from './select-button-routing.module';
import {
  BchDcSelectButtonsModule
} from '../../../../../projects/bch-dc-components/src/lib/bch-dc-select-buttons/bch-dc-select-buttons.module';
import { SharedModule } from '../../../shared/shared.module';
import {
  BchDcSelectButtonModule
} from '../../../../../projects/bch-dc-components/src/lib/bch-dc-select-button/bch-dc-select-button.module';

@NgModule({
  imports: [
    SelectButtonRoutingModule,
    BchDcSelectButtonsModule,
    BchDcSelectButtonModule,
    SharedModule
  ],
  declarations: [
    SelectButtonComponent,
  ]
})
export class SelectButtonModule {}
