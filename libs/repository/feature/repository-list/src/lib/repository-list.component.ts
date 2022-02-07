import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { repositoriesListFilterOptions } from '@github-search-ddd/ui-kit/list-filter';

import {
  IRepositoryListView,
  RepositoryListFacade,
  RepositoryStateService,
} from '@github-search-ddd/repository/domain';

@Component({
  selector: 'repository-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss'],
  providers: [RepositoryListFacade, RepositoryStateService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryListComponent implements OnInit {
  public readonly repositories$: Observable<IRepositoryListView> = this._repositoryListFacade.repositoriesViewModel$;
  public readonly filterOptions = repositoriesListFilterOptions;

  constructor(private _repositoryListFacade: RepositoryListFacade) {}

  ngOnInit() {
    this._repositoryListFacade.loadRepositories();
  }
}
