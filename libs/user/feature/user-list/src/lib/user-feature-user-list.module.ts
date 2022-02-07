import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDomainModule } from '@github-search-ddd/user/domain';

import { UserFeatureUserListRoutingModule } from './user-feature-user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { UiKitListModule } from '@github-search-ddd/ui-kit/list';
import { UiKitListFilterModule } from '@github-search-ddd/ui-kit/list-filter';
import { MaterialModule } from '@github-search-ddd/material';

@NgModule({
  imports: [
    CommonModule,
    UserDomainModule,
    UserFeatureUserListRoutingModule,
    UiKitListModule,
    UiKitListFilterModule,
    MaterialModule,
  ],
  declarations: [UserListComponent],
  exports: [UserListComponent],
})
export class UserFeatureUserListModule {}
