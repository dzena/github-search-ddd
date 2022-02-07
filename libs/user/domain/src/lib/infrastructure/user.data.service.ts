import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IUser, IUserListEntity } from '../entities/user';
import {
  EntityListDataService,
  EntityListType,
} from '@github-search-ddd/shared/entity-list/domain';

@Injectable({
  providedIn: 'root',
})
export class UserDataService extends EntityListDataService<
  IUserListEntity,
  IUser
> {
  constructor(
    @Inject('BASE_URL') protected override BASE_URL: string,
    protected override _http: HttpClient
  ) {
    super(BASE_URL, _http, EntityListType.USERS);
  }
}
