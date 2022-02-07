import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'github-search-ddd-search-result-container',
  templateUrl: './search-result-container.component.html',
  styleUrls: ['./search-result-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchResultContainerComponent {
  constructor(private _router: Router, public route: ActivatedRoute) {}

  public search(q: string): void {
    if (!q) {
      this._router.navigate(['/']);
      return;
    }

    const queryParams = { q, page: '1' };
    this._router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
