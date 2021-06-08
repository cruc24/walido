import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    children:
    [
      {
      path:'',
      loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      // {
      //   path: 'order',
      //   loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
      // },
      // {
      //   path: 'menu',
      //   loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
      // },
      // {
      //   path: 'intro',
      //   loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
      // }
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
