// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    loadChildren: () =>
      import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () =>
      import('./pages/detail/detail.module').then(m => m.DetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
