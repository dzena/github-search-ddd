import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoryTagsPipe } from './repository-tags.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [RepositoryTagsPipe],
  exports: [RepositoryTagsPipe],
})
export class RepositoryUtilsDirectivesModule {}
