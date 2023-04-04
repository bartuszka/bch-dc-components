import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleButtonComponent } from './circle-button.component';

const routes: Routes = [
  {
    path: '',
    component: CircleButtonComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CircleButtonRoutingModule {}
