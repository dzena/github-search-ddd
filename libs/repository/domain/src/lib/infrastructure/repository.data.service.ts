import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

import { IRepositoryListEntity } from '../entities/repository';

interface IResponse {
  total_count: number;
  items: IRepositoryListEntity[];
}

@Injectable({
  providedIn: 'root',
})
export class RepositoryDataService {
  constructor(
    @Inject('BASE_URL') private BASE_URL: string,
    private _http: HttpClient
  ) {}

  public getSearchResult(param: Params): Observable<IResponse> {
    const params = new HttpParams({
      fromObject: param,
    });

    return this._http.get<IResponse>(this.BASE_URL + '/search/repositories', { params });
  }
}
