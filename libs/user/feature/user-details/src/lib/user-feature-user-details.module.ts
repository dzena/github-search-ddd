import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDomainModule } from '@github-search-ddd/user/domain';
import { UserDetailsComponent } from './user-details.component';
import {MaterialModule} from "@github-search-ddd/material";

@NgModule({
  imports: [CommonModule, UserDomainModule, MaterialModule],
  declarations: [UserDetailsComponent],
  exports: [UserDetailsComponent],
})
export class UserFeatureUserDetailsModule {}
