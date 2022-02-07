import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryListComponent } from './repository-list.component';
import { EntityListContainerComponent } from '@github-search-ddd/shared/entity-list/feature/entity-list-container';

const routes: Routes = [
  {
    path: '',
    component: EntityListContainerComponent,
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
