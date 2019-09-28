import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'worldwideTab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../worldwideTab/worldwideTab.module').then(m => m.WorldWideTabPageModule)
          }
        ]
      },
      {
        path: 'brazilTab',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../brazilTab/brazilTab.module').then(m => m.BrazilTabPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/worldwideTab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/worldwideTab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
