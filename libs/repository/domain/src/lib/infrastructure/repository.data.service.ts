import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IRepositoryListEntity } from '../entities/repository';
import {
  EntityListDataService,
  EntityListType,
} from '@github-search-ddd/shared/entity-list/domain';

@Injectable({
  providedIn: 'root',
})
export class RepositoryDataService extends EntityListDataService<IRepositoryListEntity> {
  constructor(
    @Inject('BASE_URL') protected override BASE_URL: string,
    protected override _http: HttpClient
  ) {
    super(BASE_URL, _http, EntityListType.REPOSITORIES);
  }
}
