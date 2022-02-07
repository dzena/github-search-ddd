import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'search-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  constructor(private _router: Router, private _route: ActivatedRoute) {}

  public search(q: string): void {
    const queryParams = { q, per_page: '10' };
    this._router.navigate(['users'], {
      relativeTo: this._route,
      queryParams,
    });
  }
}
