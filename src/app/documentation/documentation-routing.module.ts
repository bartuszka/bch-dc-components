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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentationRoutingModule { }
