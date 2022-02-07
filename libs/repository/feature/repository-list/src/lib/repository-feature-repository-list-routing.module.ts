import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryListComponent } from './repository-list.component';
import { SearchResultContainerComponent } from '@github-search-ddd/shared/feature/search-result-container';

const routes: Routes = [
  {
    path: '',
    component: SearchResultContainerComponent,
    children: [
      {
        path: '',
        component: RepositoryListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepositoryFeatureRepositoryListRoutingModule {}
