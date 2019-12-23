import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./shared/components/home/home.module').then( m => m.HomePageModule)},
  { path: 'levels',loadChildren: () => import('./shared/components/levels/levels.module').then( m => m.LevelsPageModule)},
  {
    path: 'guess',
    loadChildren: () => import('./shared/components/guess/guess.module').then( m => m.GuessPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
