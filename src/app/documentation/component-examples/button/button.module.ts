import { NgModule } from '@angular/core';
import { ButtonComponent } from './button.component';
import { SharedModule } from '../../../shared/shared.module';
import { ButtonRoutingModule } from './button-routing.module';
import { BchDcButtonModule } from 'projects/bch-dc-components/src/lib/bch-dc-button/bch-dc-button.module';

@NgModule({
  imports: [
    BchDcButtonModule,
    SharedModule,
    ButtonRoutingModule,
  ],
  declarations: [
    ButtonComponent,
  ]
})
export class ButtonModule {}
