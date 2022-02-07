import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@github-search-ddd/material';

import { ToolbarComponent } from './toolbar.component';
import {UiKitLoadingProgressModule} from "@github-search-ddd/ui-kit/loading-progress";

@NgModule({
    imports: [CommonModule, RouterModule, MaterialModule, UiKitLoadingProgressModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class UiKitToolbarModule {}
