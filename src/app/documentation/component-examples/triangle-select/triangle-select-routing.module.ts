import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TriangleSelectComponent } from './triangle-select.component';

const routes: Routes = [
  {
    path: '',
    component: TriangleSelectComponent
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
export class TriangleSelectRoutingModule {}
