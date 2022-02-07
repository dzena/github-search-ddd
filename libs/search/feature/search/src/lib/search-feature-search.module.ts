import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@github-search-ddd/material';
import { UiKitSearchFormModule } from '@github-search-ddd/ui-kit/search-form';
import { UiKitToolbarModule } from '@github-search-ddd/ui-kit/toolbar';

import { SearchDomainModule } from '@github-search-ddd/search/domain';
import { SearchFeatureSearchRoutingModule } from './search-feature-search-routing.module';
import { SearchComponent } from './search.component';

@NgModule({
  imports: [
    CommonModule,
    SearchDomainModule,
    MaterialModule,
    SearchFeatureSearchRoutingModule,
    UiKitSearchFormModule,
    UiKitToolbarModule,

  ],
  declarations: [SearchComponent],
  exports: [SearchComponent],
})
export class SearchFeatureSearchModule {}
