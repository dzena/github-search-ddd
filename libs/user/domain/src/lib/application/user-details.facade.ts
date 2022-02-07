import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IUser } from '../entities/user';
import { UserDataService } from '../infrastructure/user.data.service';

export interface IUserDetailView {
  label: string;
  value: string | number;
}

const mapToDetailsItem = (user: IUser): IUserDetailView[] => {
  const { followers, location, name, public_repos } = user;
  return [
    { label: 'Followers', value: followers },
    { label: 'Location', value: location },
    { label: 'Name', value: name },
    { label: 'Public repos', value: public_repos },
  ];
};

@Injectable()
export class UserDetailsFacade {
  constructor(private _userDataService: UserDataService) {}

  // if we don't want to, no need to use the state service
  public getUserById(userId: string): Observable<IUserDetailView[]> {
    return this._userDataService
      .getUserById(userId)
      .pipe(map(mapToDetailsItem));
  }
}
