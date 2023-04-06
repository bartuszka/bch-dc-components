import { NgModule } from '@angular/core';
import { CodeExampleComponent } from './components/code-example/code-example.component';
import { CommonModule } from '@angular/common';
import { BchDcCircleButtonModule } from 'bch-dc-components';

@NgModule({
  imports: [
    CommonModule,
    BchDcCircleButtonModule
  ],
  declarations: [
    CodeExampleComponent,
  ],
  exports: [
    CommonModule,
    CodeExampleComponent,
  ]
})
export class SharedModule {}
