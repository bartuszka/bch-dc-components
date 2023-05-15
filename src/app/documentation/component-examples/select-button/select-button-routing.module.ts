import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectButtonComponent } from './select-button.component';

const routes: Routes = [
  {
    path: '',
    component: SelectButtonComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SelectButtonRoutingModule {}
