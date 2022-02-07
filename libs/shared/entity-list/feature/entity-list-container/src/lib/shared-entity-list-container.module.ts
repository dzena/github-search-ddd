import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@github-search-ddd/material';
import { UiKitToolbarModule } from '@github-search-ddd/ui-kit/toolbar';
import { UiKitSearchFormModule } from '@github-search-ddd/ui-kit/search-form';
import { EntityListContainerComponent } from './entity-list-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    UiKitToolbarModule,
    UiKitSearchFormModule,
  ],
  declarations: [EntityListContainerComponent],
  exports: [EntityListContainerComponent],
})
export class SharedEntityListContainerModule {}
