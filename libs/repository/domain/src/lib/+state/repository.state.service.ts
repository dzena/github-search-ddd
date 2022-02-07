import { Injectable } from '@angular/core';

import { EntityListState } from '@github-search-ddd/shared/entity-list/domain';
import { IRepositoryListEntity } from '../entities/repository';

@Injectable()
export class RepositoryStateService extends EntityListState<IRepositoryListEntity> {}
