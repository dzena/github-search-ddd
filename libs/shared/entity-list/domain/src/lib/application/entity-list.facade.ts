import { ActivatedRoute, Params } from '@angular/router';
import { EntityListState } from '../+state/entity-list.state';
import { EntityListDataService } from '../infrastructure/entity-list.data.service';
import { catchError, EMPTY, filter, Observable, switchMap } from 'rxjs';

export class EntityListFacade<T, D = void> {
  protected entities$: Observable<T[]> = this._entityState.entities$;

  constructor(
    protected _route: ActivatedRoute,
    protected _entityState: EntityListState<T>,
    protected _entityDataService: EntityListDataService<T, D>
  ) {}

  public loadEntities(): void {
    // no need to unsubscribe since this is a component instance service,
    // the router will clean up the subscription after the service is destroyed
    // together with the component where it is used
    this._route.queryParams
      .pipe(
        filter((params: Params) => 'q' in params),
        switchMap((params: Params) =>
          this._entityDataService.getSearchResult(params).pipe(
            catchError(() => EMPTY) // keep the outer observable alive
          )
        )
      )
      .subscribe((response) => {
        const { items, total_count } = response;
        this._entityState.setEntities(items, total_count);
      });
  }
}
