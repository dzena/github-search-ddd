import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StateService } from '@github-search-ddd/shared/utils/base-state';
import { IRepositoryListEntity } from '../entities/repository';

export interface IRepositoryState {
  repositories: IRepositoryListEntity[];
  totalCount: number;
}

const initialState: IRepositoryState = {
  repositories: [],
  totalCount: 0,
};

@Injectable()
export class RepositoryStateService extends StateService<IRepositoryState> {
  public repositories$: Observable<IRepositoryListEntity[]> = this.select(
    ({ repositories }) => repositories
  );
  public totalCount$: Observable<number> = this.select(
    ({ totalCount }) => totalCount
  );

  constructor() {
    super(initialState);
  }

  public setUsers(
    repositories: IRepositoryListEntity[],
    totalCount: number
  ): void {
    this.setState({ repositories: [...repositories], totalCount });
  }
}
