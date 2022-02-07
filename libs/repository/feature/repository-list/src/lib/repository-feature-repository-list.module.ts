import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryDomainModule } from '@github-search-ddd/repository/domain';

import { RepositoryListComponent } from './repository-list.component';
import { RepositoryFeatureRepositoryListRoutingModule } from './repository-feature-repository-list-routing.module';
import {UiKitListModule} from "@github-search-ddd/ui-kit/list";
import {UiKitListFilterModule} from "@github-search-ddd/ui-kit/list-filter";
import {MaterialModule} from "@github-search-ddd/material";
import {RepositoryUtilsDirectivesModule} from "@github-search-ddd/repository/utils/directives";

@NgModule({
  imports: [
    CommonModule,
    RepositoryDomainModule,
    RepositoryFeatureRepositoryListRoutingModule,
    UiKitListModule,
    UiKitListFilterModule,
    MaterialModule,
    RepositoryUtilsDirectivesModule,
    RepositoryUtilsDirectivesModule,
    RepositoryUtilsDirectivesModule,
  ],
  declarations: [RepositoryListComponent],
  exports: [RepositoryListComponent],
})
export class RepositoryFeatureRepositoryListModule {}
