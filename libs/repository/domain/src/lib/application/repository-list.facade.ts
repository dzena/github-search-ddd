import { Injectable } from '@angular/core';
import {
  catchError,
  combineLatest,
  EMPTY,
  filter,
  map,
  Observable,
  switchMap,
} from 'rxjs';

import { IRepositoryListEntity } from '../entities/repository';
import { RepositoryDataService } from '../infrastructure/repository.data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { RepositoryStateService } from '../+state/repository.state.service';

export interface IRepositoryListView {
  list: IRepositoryListEntity[];
  totalCount: number;
}

@Injectable({
  providedIn: 'root',
})
export class RepositoryListFacade {
  private repositories$: Observable<IRepositoryListEntity[]> = this._repositoryState.repositories$;

  public repositoriesViewModel$: Observable<IRepositoryListView> = combineLatest([
    this.repositories$,
    this._repositoryState.totalCount$,
  ]).pipe(map(([list, totalCount]) => ({ list, totalCount })));

  constructor(
    private _route: ActivatedRoute,
    private _repositoryState: RepositoryStateService,
    private _repositoryDataService: RepositoryDataService
  ) {}

  public loadRepositories(): void {
    // no need to unsubscribe since this is a component instance service,
    // the router will clean up the subscription after the service is destroyed
    // together with the component where it is used
    this._route.queryParams
      .pipe(
        filter((params: Params) => 'q' in params),
        switchMap((params: Params) =>
          this._repositoryDataService.getSearchResult(params).pipe(
            catchError(() => EMPTY) // keep the outer observable alive
          )
        )
      )
      .subscribe((response) => {
        const { items, total_count } = response;
        this._repositoryState.setUsers(items, total_count);
      });
  }
}
