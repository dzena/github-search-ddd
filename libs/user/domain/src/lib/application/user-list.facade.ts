import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  catchError,
  combineLatest,
  EMPTY,
  filter,
  map,
  Observable,
  switchMap,
} from 'rxjs';

import { UserStateService } from '../+state/user.state.service';
import { UserDataService } from '../infrastructure/user.data.service';
import { IUserListEntity } from '../entities/user';

export interface IUserListView {
  list: IUserListEntity[];
  totalCount: number;
}

@Injectable()
export class UserListFacade {
  private users$: Observable<IUserListEntity[]> = this._userState.users$;

  public usersViewModel$: Observable<IUserListView> = combineLatest([
    this.users$,
    this._userState.totalCount$,
  ]).pipe(map(([list, totalCount]) => ({ list, totalCount })));

  constructor(
    private _route: ActivatedRoute,
    private _userState: UserStateService,
    private _userDataService: UserDataService
  ) {}

  public loadUsers(): void {
    // no need to unsubscribe since this is a component instance service,
    // the router will clean up the subscription after the service is destroyed
    // together with the component where it is used
    this._route.queryParams
      .pipe(
        filter((params: Params) => 'q' in params),
        switchMap((params: Params) =>
          this._userDataService.getSearchResult(params).pipe(
            catchError(() => EMPTY) // keep the outer observable alive
          )
        )
      )
      .subscribe((response) => {
        const { items, total_count } = response;
        this._userState.setUsers(items, total_count);
      });
  }
}
