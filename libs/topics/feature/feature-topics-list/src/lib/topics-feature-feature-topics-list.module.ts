import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsDomainModule } from '@github-search-ddd/topics/domain';
import { FeatureTopicsListComponent } from './feature-topics-list.component';

@NgModule({
  imports: [CommonModule, TopicsDomainModule],
  declarations: [FeatureTopicsListComponent],
  exports: [FeatureTopicsListComponent],
})
export class TopicsFeatureFeatureTopicsListModule {}
