import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionBoxComponent } from './option-box.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OptionBoxComponent
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
export class OptionBoxRoutingModule {}
