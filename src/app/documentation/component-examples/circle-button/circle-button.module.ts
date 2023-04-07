import { NgModule } from '@angular/core';
import { CircleButtonRoutingModule } from './circle-button-routing.module';
import { CircleButtonComponent } from './circle-button.component';
import { BchDcCircleButtonModule } from 'projects/bch-dc-components/src/lib/bch-dc-circle-button/bch-dc-circle-button.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CircleButtonRoutingModule,
    BchDcCircleButtonModule,
    SharedModule,
  ],
  declarations: [
    CircleButtonComponent,
  ]
})
export class CircleButtonModule {}
