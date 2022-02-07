import { Injectable } from '@angular/core';

import { EntityListState } from '@github-search-ddd/shared/entity-list/domain';
import { IUserListEntity } from '../entities/user';

@Injectable()
export class UserStateService extends EntityListState<IUserListEntity> {}
