import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'picture',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../pictures/new-picture/new-picture.module').then(m => m.NewPicturePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/picture',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/picture',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
