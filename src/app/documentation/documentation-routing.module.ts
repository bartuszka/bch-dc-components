import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './documentation.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'circle-button'
      },
      {
        path: 'circle-button',
        loadChildren: () => import('./component-examples/circle-button/circle-button.module').then(m => m.CircleButtonModule)
      },
      {
        path: 'button',
        loadChildren: () => import('./component-examples/button/button.module').then(m => m.ButtonModule)
      },
      {
        path: 'input',
        loadChildren: () => import('./component-examples/input/input.module').then(m => m.InputModule)
      },
      {
        path: 'select-button',
        loadChildren: () => import('./component-examples/select-button/select-button.module').then(m => m.SelectButtonModule)
      },
      {
        path: 'option-box',
        loadChildren: () => import('./component-examples/option-box/option-box.module').then(m => m.OptionBoxModule)
      },
      {
        path: 'triangle-select',
        loadChildren: () => import('./component-examples/triangle-select/triangle-select.module').then(m => m.TriangleSelectModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
