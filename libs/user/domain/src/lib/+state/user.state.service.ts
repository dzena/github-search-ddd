import { Injectable } from '@angular/core';

import { IUserListEntity } from '../entities/user';
import { EntityListState } from '@github-search-ddd/shared/entity-list/domain';

export interface IUserState {
  users: IUserListEntity[];
  totalCount: number;
}

@Injectable()
export class UserStateService extends EntityListState<IUserListEntity> {}
