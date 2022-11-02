import { Component, OnInit } from '@angular/core';
import { TopicsListFacade } from '@github-search-ddd/topics/domain';

@Component({
  selector: 'topics-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss'],
})
export class TopicsListComponent implements OnInit {
  topicList$ = this.topicsListFacade.topicList$;

  constructor(private topicsListFacade: TopicsListFacade) {}

  ngOnInit() {
    this.load();
  }

  load(): void {
    this.topicsListFacade.load();
  }
}
