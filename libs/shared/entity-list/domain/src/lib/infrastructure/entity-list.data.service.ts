import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { EntityListType } from '../entities/entity-list';

interface IEntityListResponse<T> {
  total_count: number;
  items: T[];
}

@Injectable({
  providedIn: 'root',
})
export class EntityListDataService<T, M = void> {
  private readonly _entityListType: EntityListType;

  constructor(
    @Inject('BASE_URL') protected BASE_URL: string,
    protected _http: HttpClient,
    protected _elt: EntityListType
  ) {
    this._entityListType = _elt;
  }

  public getSearchResult(param: Params): Observable<IEntityListResponse<T>> {
    const params = new HttpParams({
      fromObject: param,
    });

    return this._http.get<IEntityListResponse<T>>(
      this.BASE_URL + `/search/${this._entityListType}`,
      {
        params,
      }
    );
  }

  public getEntityById(userId: string): Observable<M> {
    return this._http.get<M>(
      this.BASE_URL + `/${this._entityListType}/${userId}`
    );
  }
}
