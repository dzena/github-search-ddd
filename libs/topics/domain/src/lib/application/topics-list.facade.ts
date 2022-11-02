import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Topic } from '../entities/topic';
import { TopicDataService } from '../infrastructure/topic.data.service';

@Injectable({ providedIn: 'root' })
export class TopicsListFacade {
  private topicListSubject = new BehaviorSubject<Topic[]>([]);
  topicList$ = this.topicListSubject.asObservable();

  constructor(private topicDataService: TopicDataService) {}

  load(): void {
    this.topicDataService.load().subscribe({
      next: (topicList) => {
        this.topicListSubject.next(topicList);
      },
      error: (err) => {
        console.error('err', err);
      },
    });
  }
}
