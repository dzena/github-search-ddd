import { AfterViewInit, Directive, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatLegacyPaginator as MatPaginator, LegacyPageEvent as PageEvent } from '@angular/material/legacy-paginator';
import { Subject, takeUntil } from 'rxjs';

@Directive({
  selector: '[githubSearchDddPaginatorQueryReflector]',
})
export class PaginatorQueryReflectorDirective implements AfterViewInit, OnDestroy
{
  @Input() paginator!: MatPaginator;

  private _unsubscribe = new Subject<void>();

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngAfterViewInit() {
    this._onPageEvent();
    this._updatePaginatorFromQueryParams();
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  private _onPageEvent(): void {
    this.paginator.page
      .pipe(takeUntil(this._unsubscribe))
      .subscribe((p: PageEvent) => {
        const queryParams = {
          page: (p.pageIndex + 1).toString(), // paginator starts at 0 and gh api at 1
          per_page: p.pageSize.toString(),
        };
        this._router.navigate([], {
          queryParams,
          queryParamsHandling: 'merge',
        });
      });
  }

  private _updatePaginatorFromQueryParams(): void {
    this._route.queryParams
      .pipe(takeUntil(this._unsubscribe))
      .subscribe(({ page, per_page }) => {
        if (per_page) {
          this.paginator.pageSize = per_page;
        }

        if (page) {
          this.paginator.pageIndex = parseInt(page) - 1;
        }
      });
  }
}
