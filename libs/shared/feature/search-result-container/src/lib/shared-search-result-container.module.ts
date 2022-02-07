import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@github-search-ddd/material';
import { UiKitToolbarModule } from '@github-search-ddd/ui-kit/toolbar';
import { UiKitSearchFormModule } from '@github-search-ddd/ui-kit/search-form';
import { SearchResultContainerComponent } from './search-result-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    UiKitToolbarModule,
    UiKitSearchFormModule,
  ],
  declarations: [SearchResultContainerComponent],
  exports: [SearchResultContainerComponent],
})
export class SharedSearchResultContainerModule {}
