import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {
  IUserListView,
  UserListFacade,
  UserStateService,
} from '@github-search-ddd/user/domain';
import { usersListFilterOptions } from '@github-search-ddd/ui-kit/list-filter';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { UserDetailsComponent } from '@github-search-ddd/user/feature/user-details';

@Component({
  selector: 'user-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  providers: [UserListFacade, UserStateService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnInit {
  public readonly users$: Observable<IUserListView> =
    this._userListFacade.usersViewModel$;
  public readonly filterOptions = usersListFilterOptions;

  constructor(
    private _userListFacade: UserListFacade,
    private _matBottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    this._userListFacade.loadUsers();
  }

  public readMore(userId: string): void {
    this._matBottomSheet.open(UserDetailsComponent, {
      data: { userId },
      hasBackdrop: true,
    });
  }
}
