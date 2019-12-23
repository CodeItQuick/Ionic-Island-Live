import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'About',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'sports',
    loadChildren: () => import('./portfolio/sports/sports.module').then( m => m.SportsPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./portfolio/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'other',
    loadChildren: () => import('./portfolio/other/other.module').then( m => m.OtherPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
