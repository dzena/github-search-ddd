import { Injectable } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';

import { IRepositoryListEntity } from '../entities/repository';
import { RepositoryDataService } from '../infrastructure/repository.data.service';
import { ActivatedRoute } from '@angular/router';
import { RepositoryStateService } from '../+state/repository.state.service';
import { EntityListFacade } from '@github-search-ddd/shared/entity-list/domain';

export interface IRepositoryListView {
  list: IRepositoryListEntity[];
  totalCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class RepositoryListFacade extends EntityListFacade<IRepositoryListEntity> {
  public repositoriesViewModel$: Observable<IRepositoryListView> =
    combineLatest([this.entities$, this._repositoryState.totalCount$]).pipe(
      map(([list, totalCount]) => ({ list, totalCount }))
    );

  constructor(
    protected override _route: ActivatedRoute,
    private _repositoryState: RepositoryStateService,
    private _repositoryDataService: RepositoryDataService
  ) {
    super(_route, _repositoryState, _repositoryDataService);
  }

  public loadRepositories(): void {
    this.loadEntities();
  }
}
