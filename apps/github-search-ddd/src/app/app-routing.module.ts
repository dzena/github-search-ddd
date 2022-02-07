import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: 'search',
    loadChildren: () =>
      import('@github-search-ddd/search/feature/search').then(
        (m) => m.SearchFeatureSearchModule
      ),
  },
  {
    path: 'search/users',
    loadChildren: () =>
      import('@github-search-ddd/user/feature/user-list').then(
        (m) => m.UserFeatureUserListModule
      ),
  },
  {
    path: 'search/repositories',
    loadChildren: () =>
      import('@github-search-ddd/repository/feature/repository-list').then(
        (m) => m.RepositoryFeatureRepositoryListModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
