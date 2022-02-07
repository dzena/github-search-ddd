import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, map, Observable } from 'rxjs';

import { UserStateService } from '../+state/user.state.service';
import { UserDataService } from '../infrastructure/user.data.service';
import { IUser, IUserListEntity } from '../entities/user';
import { EntityListFacade } from '@github-search-ddd/shared/entity-list/domain';

export interface IUserListView {
  list: IUserListEntity[];
  totalCount: number;
}

@Injectable()
export class UserListFacade extends EntityListFacade<IUserListEntity, IUser> {
  public usersViewModel$: Observable<IUserListView> = combineLatest([
    this.entities$,
    this._userState.totalCount$,
  ]).pipe(map(([list, totalCount]) => ({ list, totalCount })));

  constructor(
    protected override _route: ActivatedRoute,
    private _userState: UserStateService,
    private _userDataService: UserDataService
  ) {
    super(_route, _userState, _userDataService);
  }

  public loadUsers(): void {
    this.loadEntities();
  }
}
