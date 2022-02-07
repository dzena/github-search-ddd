import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { StateService } from '@github-search-ddd/shared/utils/base-state';
import { IUserListEntity } from '../entities/user';

export interface IUserState {
  users: IUserListEntity[];
  totalCount: number;
}

const initialState: IUserState = {
  users: [],
  totalCount: 0,
};

@Injectable()
export class UserStateService extends StateService<IUserState> {
  public users$: Observable<IUserListEntity[]> = this.select(
    ({ users }) => users
  );
  public totalCount$: Observable<number> = this.select(
    ({ totalCount }) => totalCount
  );

  constructor() {
    super(initialState);
  }

  public setUsers(users: IUserListEntity[], totalCount: number): void {
    this.setState({ users: [...users], totalCount });
  }
}
