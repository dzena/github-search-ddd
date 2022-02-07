import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  IUserDetailView,
  UserDetailsFacade,
} from '@github-search-ddd/user/domain';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { catchError, EMPTY, Observable } from 'rxjs';

@Component({
  selector: 'user-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [UserDetailsFacade],
})
export class UserDetailsComponent {
  public userDetails$: Observable<IUserDetailView[]> = this._userDetailsFacade
    .getUserById(this.data.userId)
    .pipe(
      catchError(() => {
        this.closeDetails();
        return EMPTY;
      })
    );

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { userId: string },
    private _sheetRef: MatBottomSheetRef,
    private _userDetailsFacade: UserDetailsFacade
  ) {}

  public closeDetails(): void {
    this._sheetRef.dismiss();
  }
}
