import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@github-search-ddd/material';

import { SearchFormComponent } from './search-form.component';

@NgModule({
  imports: [CommonModule, FormsModule, MaterialModule],
  declarations: [SearchFormComponent],
  exports: [SearchFormComponent],
})
export class UiKitSearchFormModule {}
