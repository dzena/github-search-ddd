import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

import { IUser, IUserListEntity } from '../entities/user';

interface IResponse {
  total_count: number;
  items: IUserListEntity[];
}

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(
    @Inject('BASE_URL') private BASE_URL: string,
    private _http: HttpClient
  ) {}

  public getSearchResult(param: Params): Observable<IResponse> {
    const params = new HttpParams({
      fromObject: param,
    });

    return this._http.get<IResponse>(this.BASE_URL + '/search/users', {params});
  }

  public getUserById(userId: string): Observable<IUser> {
    return this._http.get<IUser>(this.BASE_URL + `/users/${userId}`);
  }
}
